import { NextResponse } from 'next/server';
import { advisors, generateAdvisorPlaceholder } from '../../../../data/advisors';

// This function is called at build time to generate static params
export async function generateStaticParams() {
  return advisors.map((advisor) => ({
    id: advisor.id,
  }));
}

// This function handles GET requests
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Get the ID from the URL
    const id = params.id;
    
    if (!id) {
      return NextResponse.json({ error: 'Advisor ID is required' }, { status: 400 });
    }

    // Find the advisor in our data
    const advisor = advisors.find(a => a.id === id);
    
    if (!advisor) {
      return NextResponse.json({ error: 'Advisor not found' }, { status: 404 });
    }

    // Generate placeholder data if needed
    const advisorWithPlaceholder = !advisor.bio 
      ? generateAdvisorPlaceholder(advisor)
      : advisor;

    return NextResponse.json(advisorWithPlaceholder);
  } catch (error) {
    console.error('Error fetching advisor:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Only use statically generated params
export const dynamicParams = false;
