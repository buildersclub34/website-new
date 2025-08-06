import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Define the request schema
const membershipSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  companyName: z.string().min(1),
  companyWebsite: z.string().url().or(z.literal('')),
  linkedinUrl: z.string().url(),
  currentProfile: z.string().min(1),
  designation: z.string().min(1),
  industry: z.string().min(1),
  fundingStatus: z.enum([
    'NOT_APPLICABLE',
    'IDEA_STAGE',
    'MVP_STAGE',
    'BOOTSTRAPPED_NOT_RAISING',
    'BOOTSTRAP_LOOKING_TO_RAISE',
    'PRE_SEED',
    'SEED',
    'SERIES_A',
    'SERIES_B_PLUS'
  ]),
  fundingAmount: z.string().optional(),
  annualTurnover: z.enum([
    'NOT_APPLICABLE',
    'NO_REVENUE',
    'ZERO_TO_1K',
    'ONEK_TO_10K',
    'TENK_TO_50K',
    'FIFTYK_TO_100K',
    'HUNDREDK_TO_1M',
    'ONE_MILLION_PLUS'
  ]),
  lookingToRaise: z.boolean(),
  currentInvestors: z.string().optional(),
  wantsToVolunteer: z.boolean(),
  location: z.string().min(1),
  otherLocation: z.string().optional(),
  referralSource: z.string().min(1),
  otherReferralSource: z.string().optional(),
  inviteeDetails: z.string().optional(),
  userId: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    // Verify authentication
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'You must be signed in to submit this form' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse and validate request body
    const body = await req.json();
    const validation = membershipSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid request data', details: validation.error.issues }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = validation.data;

    // Check if user already has a pending or approved membership
    const existingMembership = await prisma.membership.findFirst({
      where: {
        OR: [
          { email: data.email },
          { userId: session.user.id }
        ],
        status: { in: ['PENDING', 'APPROVED'] }
      }
    });

    if (existingMembership) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'You already have a pending or approved membership application' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create the membership application
    const membership = await prisma.membership.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        companyName: data.companyName,
        companyWebsite: data.companyWebsite || '',
        linkedinUrl: data.linkedinUrl,
        currentProfile: data.currentProfile,
        designation: data.designation,
        industry: data.industry,
        fundingStatus: data.fundingStatus,
        fundingAmount: data.fundingAmount || '',
        annualTurnover: data.annualTurnover,
        lookingToRaise: data.lookingToRaise,
        currentInvestors: data.currentInvestors || '',
        wantsToVolunteer: data.wantsToVolunteer,
        location: data.location,
        otherLocation: data.otherLocation || '',
        referralSource: data.referralSource,
        otherReferralSource: data.otherReferralSource || '',
        inviteeDetails: data.inviteeDetails || '',
        userId: session.user.id,
        status: 'PENDING',
      },
    });

    // TODO: Send email notification to admin
    // await sendNewMembershipNotification(membership);

    return NextResponse.json(
      { message: 'Membership application submitted successfully', membership },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting membership application:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
