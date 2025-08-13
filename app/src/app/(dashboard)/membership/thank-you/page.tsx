import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <Card className="text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Application Submitted Successfully!</CardTitle>
          <CardDescription>
            Thank you for applying to The Builders Club. We've received your application and will review it shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We'll notify you via email once your application has been reviewed. This usually takes 2-3 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://discord.gg/buildersclub" target="_blank" rel="noopener noreferrer">
                Join Our Community
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
