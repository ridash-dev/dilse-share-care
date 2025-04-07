
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Package } from "lucide-react";

const donationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  itemType: z.string().min(1, { message: "Please select an item type" }),
  itemDescription: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  address: z
    .string()
    .min(10, { message: "Address must be at least 10 characters" }),
  organizationId: z.string().optional(),
});

type DonationFormValues = z.infer<typeof donationFormSchema>;

const DonationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      itemType: "",
      itemDescription: "",
      address: "",
      organizationId: "",
    },
  });

  const onSubmit = async (data: DonationFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      
      // Show success message
      toast({
        title: "Donation Submitted!",
        description: "Thank you for your generosity. We'll connect you with the organization soon.",
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      form.reset();
    }, 1500);
  };

  const itemTypes = [
    "Clothing",
    "Food",
    "School Supplies",
    "Toys",
    "Electronics",
    "Furniture",
    "Medical Supplies",
    "Books",
    "Household Items",
    "Other",
  ];

  const organizations = [
    { id: "1", name: "Happy Children Orphanage" },
    { id: "2", name: "Golden Years Home" },
    { id: "3", name: "Hope NGO" },
    { id: "4", name: "Sunshine Shelter" },
    { id: "5", name: "New Beginnings Foundation" },
  ];

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Donation Submitted Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your generosity. We've received your donation details and will connect you with the organization soon.
        </p>
        <p className="text-gray-600 mb-6">
          You can track the status of your donation in your dashboard.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)} 
          className="bg-dilse-500 hover:bg-dilse-600"
        >
          Make Another Donation
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg animate-fade-in">
      <div className="flex items-center space-x-4 mb-6">
        <Package className="h-8 w-8 text-dilse-500" />
        <h2 className="text-2xl font-semibold text-gray-900">Donation Form</h2>
      </div>
      
      <p className="text-gray-600 mb-8">
        Fill out the form below to donate items directly to organizations in need. Your generosity makes a real difference.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="form-input-focus" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="form-input-focus" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 9876543210" {...field} className="form-input-focus" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="itemType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="form-input-focus">
                        <SelectValue placeholder="Select item type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {itemTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="itemDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe the items you want to donate (quantity, size, condition, etc.)"
                    className="resize-none form-input-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Address</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter the address from where the items can be picked up"
                    className="resize-none form-input-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organizationId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Organization (Optional)</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="form-input-focus">
                      <SelectValue placeholder="Choose an organization or leave empty to let us match" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {organizations.map((org) => (
                      <SelectItem key={org.id} value={org.id}>
                        {org.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-dilse-500 hover:bg-dilse-600 py-6 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Donation"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DonationForm;
