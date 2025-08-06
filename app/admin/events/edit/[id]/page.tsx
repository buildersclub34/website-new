'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Upload, X } from 'lucide-react';

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

interface PageProps {
  params: {
    id: string;
  };
}

export default function EditEventPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });
  
  const { register, handleSubmit, formState: { errors }, setValue, watch, resetField, reset } = form;

  const isPublished = watch('isPublished');
  const isFeatured = watch('isFeatured');

  // Fetch event data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/admin/events/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const event = await response.json();
        
        // Create form data object
        const formData: Record<string, any> = {};
        
        // Map API response to form fields
        Object.entries(event).forEach(([key, value]) => {
          if (key === 'startDate' || key === 'endDate') {
            if (value) {
              try {
                formData[key] = new Date(value as string).toISOString().split('T')[0];
              } catch (error) {
                console.error(`Error parsing date for ${key}:`, value);
                formData[key] = '';
              }
            } else {
              formData[key] = '';
            }
          } else if (value !== null && value !== undefined) {
            formData[key] = value;
          }
        });
        
        // Set form values
        reset(formData);
        
        // Set image preview if exists
        if (event.image) {
          setImagePreview(event.image);
        }
      } catch (error) {
        console.error('Error fetching event:', error);
        toast.error('Failed to load event');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
    resetField('imageUrl');
  };

  const onSubmit = async (data: EventFormData) => {
    try {
      setIsSubmitting(true);
      
      const formData = new FormData();
      
      // Add all form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (key === 'image') return; // Skip the image field as we handle it separately
          formData.append(key, value.toString());
        }
      });
      
      // Add file if exists
      if (fileInputRef.current?.files?.[0]) {
        formData.append('image', fileInputRef.current.files[0]);
      } else if (data.imageUrl) {
        formData.append('imageUrl', data.imageUrl);
      }

      const response = await fetch(`/api/admin/events/${params.id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update event');
      }

      toast.success('Event updated successfully');
      router.push('/admin/events');
    } catch (error) {
      console.error('Error updating event:', error);
      toast.error('Failed to update event');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Edit Event</h1>
          <p className="text-gray-400">Update the event details</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            onClick={() => router.push('/admin/events')}
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
          >
            Cancel
          </Button>
        </div>
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
                  <Label htmlFor="title" className="text-white">Title</Label>
                  <Input
                    id="title"
                    className={`bg-gray-800 border-gray-700 text-white ${errors.title ? 'border-red-500' : ''}`}
                    {...register('title')}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">{errors.title.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <Textarea
                    id="description"
                    className={`min-h-[100px] bg-gray-800 border-gray-700 text-white ${errors.description ? 'border-red-500' : ''}`}
                    {...register('description')}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">{errors.description.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content" className="text-white">Content</Label>
                  <Textarea
                    id="content"
                    className={`min-h-[200px] bg-gray-800 border-gray-700 text-white ${errors.content ? 'border-red-500' : ''}`}
                    {...register('content')}
                  />
                  {errors.content && (
                    <p className="text-sm text-red-500">{errors.content.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="text-white">Start Date</Label>
                    <Input
                      id="startDate"
                      type="datetime-local"
                      className={`bg-gray-800 border-gray-700 text-white ${errors.startDate ? 'border-red-500' : ''}`}
                      {...register('startDate')}
                    />
                    {errors.startDate && (
                      <p className="text-sm text-red-500">{errors.startDate.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate" className="text-white">End Date (Optional)</Label>
                    <Input
                      id="endDate"
                      type="datetime-local"
                      className="bg-gray-800 border-gray-700 text-white"
                      {...register('endDate')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white">Location</Label>
                  <Input
                    id="location"
                    className={`bg-gray-800 border-gray-700 text-white ${errors.location ? 'border-red-500' : ''}`}
                    {...register('location')}
                  />
                  {errors.location && (
                    <p className="text-sm text-red-500">{errors.location.message}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="image" className="text-white">Image (Optional)</Label>
                    <div className="flex flex-col space-y-4">
                      <div className="flex space-x-2">
                        <label
                          className="flex-1 cursor-pointer bg-gray-800 border border-dashed border-gray-700 rounded-md p-4 text-center hover:bg-gray-700 transition-colors"
                          htmlFor="file-upload"
                        >
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                          />
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <Upload className="w-6 h-6 text-gray-400" />
                            <span className="text-sm text-gray-300">
                              {imagePreview || watch('image') ? 'Change image' : 'Upload an image'}
                            </span>
                            <p className="text-xs text-gray-400">
                              PNG, JPG, GIF up to 5MB
                            </p>
                          </div>
                        </label>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-gray-900 text-gray-400">
                            OR
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="imageUrl" className="text-gray-300">Enter image URL (Optional)</Label>
                        <Input
                          id="imageUrl"
                          type="url"
                          className="bg-gray-800 border-gray-700 text-white"
                          placeholder="https://example.com/image.jpg"
                          disabled={!!imagePreview}
                          {...register('imageUrl')}
                        />
                      </div>
                    </div>
                    
                    {errors.image && (
                      <p className="text-sm text-red-500">
                        {typeof errors.image.message === 'string' 
                          ? errors.image.message 
                          : 'An error occurred with the image'}
                      </p>
                    )}
                  </div>
                  
                  {(imagePreview || watch('image') || watch('imageUrl' as const)) && (
                    <div className="mt-2">
                      <div className="relative aspect-video bg-gray-800 rounded-md overflow-hidden">
                        {imagePreview ? (
                          <>
                            <Image
                              src={imagePreview}
                              alt="Preview"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute top-2 right-2 p-1 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                            >
                              <X className="w-4 h-4 text-white" />
                            </button>
                          </>
                        ) : watch('imageUrl' as const) ? (
                          <Image
                            src={watch('imageUrl' as const) as string}
                            alt="Preview"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : watch('image') ? (
                          <Image
                            src={watch('image') as string}
                            alt="Preview"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : null}
                      </div>
                    </div>
                  )}
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
                  <div>
                    <Label htmlFor="isPublished" className="text-white">Status</Label>
                    <p className="text-sm text-gray-400">
                      {isPublished ? 'Published' : 'Draft'}
                    </p>
                  </div>
                  <Switch
                    id="isPublished"
                    checked={isPublished}
                    onCheckedChange={(checked) => setValue('isPublished', checked)}
                    className="data-[state=checked]:bg-yellow-400 data-[state=unchecked]:bg-gray-700"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="isFeatured" className="text-white">Featured</Label>
                    <p className="text-sm text-gray-400">
                      {isFeatured ? 'Featured on homepage' : 'Not featured'}
                    </p>
                  </div>
                  <Switch
                    id="isFeatured"
                    checked={isFeatured}
                    onCheckedChange={(checked) => setValue('isFeatured', checked)}
                    className="data-[state=checked]:bg-yellow-400 data-[state=unchecked]:bg-gray-700"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Updating...' : 'Update Event'}
                </Button>
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
                        No image selected
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
