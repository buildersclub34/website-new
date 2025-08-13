'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/Icons';

type MembershipFormProps = {
  form: any;
  onSubmit: (data: any) => void;
  isSubmitting: boolean;
};

export default function MembershipForm({ form, onSubmit, isSubmitting }: MembershipFormProps) {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = form;
  const currentLocation = watch('location');
  const currentReferralSource = watch('referralSource');
  const currentProfile = watch('currentProfile');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" {...register('name')} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message as string}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" {...register('email')} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input id="phoneNumber" {...register('phoneNumber')} />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500">{errors.phoneNumber.message as string}</p>
            )}
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company/Startup Name *</Label>
            <Input id="companyName" {...register('companyName')} />
            {errors.companyName && (
              <p className="text-sm text-red-500">{errors.companyName.message as string}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyWebsite">Company Website</Label>
            <Input id="companyWebsite" {...register('companyWebsite')} placeholder="https://example.com" />
            {errors.companyWebsite && (
              <p className="text-sm text-red-500">{errors.companyWebsite.message as string}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedinUrl">LinkedIn Profile URL *</Label>
            <Input id="linkedinUrl" {...register('linkedinUrl')} placeholder="https://linkedin.com/in/username" />
            {errors.linkedinUrl && (
              <p className="text-sm text-red-500">{errors.linkedinUrl.message as string}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="designation">Designation *</Label>
            <Input id="designation" {...register('designation')} />
            {errors.designation && (
              <p className="text-sm text-red-500">{errors.designation.message as string}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry *</Label>
            <Input id="industry" {...register('industry')} />
            {errors.industry && (
              <p className="text-sm text-red-500">{errors.industry.message as string}</p>
            )}
          </div>
        </div>
      </div>

      {/* Current Profile */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Profile *</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Select onValueChange={(value) => setValue('currentProfile', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your current profile" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Working_Professional">Working Professional</SelectItem>
                <SelectItem value="B2B_Startup_Founder">B2B Startup Founder</SelectItem>
                <SelectItem value="B2C_Startup_Founder">B2C Startup Founder</SelectItem>
                <SelectItem value="Consultant_Freelancer">Consultant / Freelancer</SelectItem>
                <SelectItem value="Investor">Investor</SelectItem>
              </SelectContent>
            </Select>
            {errors.currentProfile && (
              <p className="text-sm text-red-500">{errors.currentProfile.message as string}</p>
            )}
          </div>
        </div>
      </div>

      {/* Funding Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Funding Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fundingStatus">Funding Status *</Label>
            <Select onValueChange={(value) => setValue('fundingStatus', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select funding status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NOT_APPLICABLE">Not applicable</SelectItem>
                <SelectItem value="IDEA_STAGE">In Idea Stage</SelectItem>
                <SelectItem value="MVP_STAGE">In MVP Stage</SelectItem>
                <SelectItem value="BOOTSTRAPPED_NOT_RAISING">Bootstrapped & Not Raising Funds</SelectItem>
                <SelectItem value="BOOTSTRAP_LOOKING_TO_RAISE">Bootstrapped & Looking to raise funds</SelectItem>
                <SelectItem value="PRE_SEED">Pre Seed Funded</SelectItem>
                <SelectItem value="SEED">Seed Funded</SelectItem>
                <SelectItem value="SERIES_A">Series A</SelectItem>
                <SelectItem value="SERIES_B_PLUS">Series B+</SelectItem>
              </SelectContent>
            </Select>
            {errors.fundingStatus && (
              <p className="text-sm text-red-500">{errors.fundingStatus.message as string}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="fundingAmount">Funding Amount (if any)</Label>
            <Input 
              id="fundingAmount" 
              {...register('fundingAmount')} 
              placeholder="e.g., $100,000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="annualTurnover">Annual Turnover *</Label>
            <Select onValueChange={(value) => setValue('annualTurnover', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select annual turnover" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NOT_APPLICABLE">Not applicable</SelectItem>
                <SelectItem value="NO_REVENUE">Yet to Generate revenue</SelectItem>
                <SelectItem value="ZERO_TO_1K">$0 - $1,000</SelectItem>
                <SelectItem value="ONEK_TO_10K">$1,000 - $10,000</SelectItem>
                <SelectItem value="TENK_TO_50K">$10,000 - $50,000</SelectItem>
                <SelectItem value="FIFTYK_TO_100K">$50,000 - $100,000</SelectItem>
                <SelectItem value="HUNDREDK_TO_1M">$100,000 - $1M</SelectItem>
                <SelectItem value="ONE_MILLION_PLUS">$1M+</SelectItem>
              </SelectContent>
            </Select>
            {errors.annualTurnover && (
              <p className="text-sm text-red-500">{errors.annualTurnover.message as string}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Looking to raise funds? *</Label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={watch('lookingToRaise') === true}
                  onChange={() => setValue('lookingToRaise', true)}
                  className="h-4 w-4 text-primary"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={watch('lookingToRaise') === false}
                  onChange={() => setValue('lookingToRaise', false)}
                  className="h-4 w-4 text-primary"
                />
                <span>No</span>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="currentInvestors">Current Investors (if any)</Label>
            <Textarea 
              id="currentInvestors" 
              {...register('currentInvestors')} 
              placeholder="List your current investors, if any"
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Additional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Select onValueChange={(value) => setValue('location', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Gurgaon">Gurgaon</SelectItem>
                <SelectItem value="Noida">Noida</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Bengaluru">Bengaluru</SelectItem>
                <SelectItem value="Kolkata">Kolkata</SelectItem>
                <SelectItem value="Chennai">Chennai</SelectItem>
                <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                <SelectItem value="Jaipur">Jaipur</SelectItem>
                <SelectItem value="Pune">Pune</SelectItem>
                <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                <SelectItem value="Indore">Indore</SelectItem>
                <SelectItem value="Other_Indian_City">Other Indian City</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Singapore">Singapore</SelectItem>
                <SelectItem value="Dubai">Dubai</SelectItem>
                <SelectItem value="Other_Country">Other Country</SelectItem>
              </SelectContent>
            </Select>
            {errors.location && (
              <p className="text-sm text-red-500">{errors.location.message as string}</p>
            )}
          </div>
          {(currentLocation === 'Other_Indian_City' || currentLocation === 'Other_Country') && (
            <div className="space-y-2">
              <Label htmlFor="otherLocation">
                {currentLocation === 'Other_Indian_City' ? 'City Name *' : 'Country Name *'}
              </Label>
              <Input 
                id="otherLocation" 
                {...register('otherLocation')} 
                placeholder={currentLocation === 'Other_Indian_City' ? 'Enter your city' : 'Enter your country'}
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="referralSource">How did you hear about us? *</Label>
            <Select onValueChange={(value) => setValue('referralSource', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Twitter">Twitter</SelectItem>
                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                <SelectItem value="Instagram">Instagram</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="Slack_Community">Slack Community</SelectItem>
                <SelectItem value="TBC_Discord">TBC Discord</SelectItem>
                <SelectItem value="TBC_Whatsapp">TBC Whatsapp</SelectItem>
                <SelectItem value="Email">Email</SelectItem>
                <SelectItem value="Referred_By_Friend">Referred by a friend</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.referralSource && (
              <p className="text-sm text-red-500">{errors.referralSource.message as string}</p>
            )}
          </div>
          {currentReferralSource === 'Other' && (
            <div className="space-y-2">
              <Label htmlFor="otherReferralSource">Please specify *</Label>
              <Input 
                id="otherReferralSource" 
                {...register('otherReferralSource')} 
                placeholder="How did you hear about us?"
              />
            </div>
          )}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="inviteeDetails">Would you like to invite anyone? (Optional)</Label>
            <Textarea 
              id="inviteeDetails" 
              {...register('inviteeDetails')} 
              placeholder="Share their contact details (LinkedIn URL, Email or Whatsapp number)"
              rows={3}
            />
          </div>
          <div className="space-y-2 flex items-center">
            <input
              type="checkbox"
              id="wantsToVolunteer"
              {...register('wantsToVolunteer')}
              className="h-4 w-4 text-primary rounded"
            />
            <Label htmlFor="wantsToVolunteer" className="ml-2">
              I'm interested in volunteering for the club
            </Label>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </div>
    </form>
  );
}
