'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Calendar, Clock, MapPin, Upload, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  content: z.string().min(1, 'Content is required'),
  image: z.any().optional(),
  imageUrl: z.string().url('Please enter a valid URL').optional(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  location: z.string().min(1, 'Location is required'),
  isPublished: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
});

type EventFormData = z.infer<typeof eventSchema>;

export default function NewEventPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isFormSubmitting },
    setValue,
    watch,
    resetField,
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      isPublished: false,
      isFeatured: false,
    },
  });

  const isPublished = watch('isPublished');
  const isFeatured = watch('isFeatured');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    resetField('image');
  };

  const onSubmit = async (data: EventFormData) => {
    try {
      setIsSubmitting(true);
      console.log('Form data:', data);
      
      const formData = new FormData();
      
      // Add all form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (key === 'image') return; // Skip the image field as we handle it separately
          formData.append(key, value.toString());
          console.log(`Added field: ${key} = ${value}`);
        }
      });
      
      // Add file if exists
      if (fileInputRef.current?.files?.[0]) {
        const file = fileInputRef.current.files[0];
        formData.append('image', file);
        console.log('Added file:', file.name, file.size, file.type);
      } else if (data.imageUrl) {
        formData.append('imageUrl', data.imageUrl);
        console.log('Added image URL:', data.imageUrl);
      }

      // Log FormData content (using Array.from to avoid --downlevelIteration)
      console.log('FormData content:');
      Array.from(formData.entries()).forEach(([key, value]) => {
        console.log(`- ${key} = ${value}`);
      });

      console.log('Sending request to /api/admin/events');
      const response = await fetch('/api/admin/events', {
        method: 'POST',
        body: formData,
        credentials: 'include', // Include cookies for authentication
        headers: {
          'Accept': 'application/json', // Ensure we expect JSON back
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to create event: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to create event');
      }

      toast.success('Event created successfully');
      router.push('/admin/events');
    } catch (error: any) {
      console.error('Error creating event:', error);
      toast.error(error.message || 'Failed to create event');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">New Event</h1>
          <p className="text-gray-400">Create a new event</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
          type="button"
        >
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="event-title" className="text-white">
                    Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="event-title"
                    className={`bg-gray-800 border-gray-700 text-white ${errors.title ? 'border-red-500' : ''}`}
                    {...register('title', { required: 'Title is required' })}
                    aria-invalid={errors.title ? 'true' : 'false'}
                    aria-describedby={errors.title ? 'title-error' : undefined}
                  />
                  {errors.title && (
                    <p id="title-error" className="text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-description" className="text-white">
                    Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="event-description"
                    className={`min-h-[100px] bg-gray-800 border-gray-700 text-white ${errors.description ? 'border-red-500' : ''}`}
                    {...register('description', { required: 'Description is required' })}
                    aria-invalid={errors.description ? 'true' : 'false'}
                    aria-describedby={errors.description ? 'description-error' : undefined}
                  />
                  {errors.description && (
                    <p id="description-error" className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-content" className="text-white">
                    Content <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="event-content"
                    className={`min-h-[200px] bg-gray-800 border-gray-700 text-white ${errors.content ? 'border-red-500' : ''}`}
                    {...register('content', { required: 'Content is required' })}
                    aria-invalid={errors.content ? 'true' : 'false'}
                    aria-describedby={errors.content ? 'content-error' : undefined}
                  />
                  {errors.content && (
                    <p id="content-error" className="text-sm text-red-500">
                      {errors.content.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-start-date" className="text-white">
                      Start Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="event-start-date"
                      type="datetime-local"
                      className={`bg-gray-800 border-gray-700 text-white ${errors.startDate ? 'border-red-500' : ''}`}
                      {...register('startDate', { required: 'Start date is required' })}
                      aria-invalid={errors.startDate ? 'true' : 'false'}
                      aria-describedby={errors.startDate ? 'start-date-error' : undefined}
                    />
                    {errors.startDate && (
                      <p id="start-date-error" className="text-sm text-red-500">
                        {errors.startDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-end-date" className="text-white">
                      End Date (Optional)
                    </Label>
                    <Input
                      id="event-end-date"
                      type="datetime-local"
                      className="bg-gray-800 border-gray-700 text-white"
                      {...register('endDate')}
                      aria-invalid={errors.endDate ? 'true' : 'false'}
                      aria-describedby={errors.endDate ? 'end-date-error' : undefined}
                    />
                    {errors.endDate && (
                      <p id="end-date-error" className="text-sm text-red-500">
                        {errors.endDate.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-location" className="text-white">
                    Location <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="event-location"
                    className={`bg-gray-800 border-gray-700 text-white ${errors.location ? 'border-red-500' : ''}`}
                    {...register('location', { required: 'Location is required' })}
                    aria-invalid={errors.location ? 'true' : 'false'}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                  />
                  {errors.location && (
                    <p id="location-error" className="text-sm text-red-500">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-image-upload" className="text-white">
                      Event Image <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex items-center space-x-4">
                      <label
                        htmlFor="event-image-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg border-gray-700 cursor-pointer hover:border-yellow-400 transition-colors"
                        aria-describedby="image-upload-help"
                      >
                        <Upload className="w-8 h-8 mb-2 text-gray-400" aria-hidden="true" />
                        <p className="text-sm text-gray-400">
                          {fileInputRef.current?.files?.[0]?.name || 'Click to upload an image'}
                        </p>
                      </label>
                      <input
                        id="event-image-upload"
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        aria-invalid={errors.image ? 'true' : 'false'}
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            setValue('imageUrl', '');
                            // Trigger validation for imageUrl field
                            const form = e.target.closest('form');
                            if (form) {
                              const event = new Event('input', { bubbles: true });
                              form.dispatchEvent(event);
                            }
                          }
                        }}
                      />
                    </div>
                    <p id="image-upload-help" className="text-xs text-gray-500">
                      Upload an image or enter a URL below (max 5MB, JPG, PNG, or WebP)
                    </p>
                    {errors.image && (
                      <p className="text-sm text-red-500" role="alert">
                        {typeof errors.image.message === 'string' ? errors.image.message : 'Invalid image'}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-image-url" className="text-white">
                      Or enter image URL
                    </Label>
                    <Input
                      id="event-image-url"
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      className={`bg-gray-800 border-gray-700 text-white ${errors.imageUrl ? 'border-red-500' : ''}`}
                      disabled={!!fileInputRef.current?.files?.[0]}
                      aria-invalid={errors.imageUrl ? 'true' : 'false'}
                      aria-describedby={errors.imageUrl ? 'image-url-error' : 'image-url-help'}
                      {...register('imageUrl', {
                        validate: (value) => {
                          if (!value && !fileInputRef.current?.files?.[0]) {
                            return 'Either an image file or URL is required';
                          }
                          return true;
                        },
                      })}
                    />
                    {errors.imageUrl ? (
                      <p id="image-url-error" className="text-sm text-red-500" role="alert">
                        {errors.imageUrl.message}
                      </p>
                    ) : (
                      <p id="image-url-help" className="text-xs text-gray-500">
                        Enter a valid image URL (e.g., https://example.com/image.jpg)
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Publish</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="event-published"
                      checked={isPublished}
                      onCheckedChange={(checked) => setValue('isPublished', checked)}
                      aria-label="Publish this event"
                    />
                    <Label htmlFor="event-published">Publish</Label>
                  </div>
                  <p className="text-sm text-gray-400">
                    {isPublished ? 'Published' : 'Draft'}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="event-featured"
                      checked={isFeatured}
                      onCheckedChange={(checked) => setValue('isFeatured', checked)}
                      aria-label="Feature this event"
                    />
                    <Label htmlFor="event-featured">Featured</Label>
                  </div>
                  <p className="text-sm text-gray-400">
                    {isFeatured ? 'Featured on homepage' : 'Not featured'}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    type="submit"
                    className="bg-yellow-400 text-black hover:bg-yellow-300 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating...
                      </span>
                    ) : (
                      'Create Event'
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                    onClick={() => router.back()}
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>

            {watch('image') && (
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Image Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video bg-gray-800 rounded-md overflow-hidden">
                    {watch('image') ? (
                      <Image 
                        src={watch('image') as string} 
                        alt="Preview" 
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Image preview will appear here
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
