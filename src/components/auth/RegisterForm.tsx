import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Check, IdCard } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const registerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  confirmPassword: z.string(),
  userType: z.enum(["donor", "organization"]),
  idType: z.enum(["aadhar", "pan", "driving"]),
  idNumber: z.string().min(3, { message: "Please enter a valid ID number" }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  organizationName: z.string().optional(),
  organizationEmail: z.string().email().optional(),
  organizationPhone: z.string().min(10).optional(),
  organizationAddress: z.string().optional(),
  registrationCertificate: z.any().optional(),
  taxExemptionCertificate: z.any().optional(),
  addressProof: z.any().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
}).refine((data) => {
  if (data.userType === "organization") {
    return data.organizationName && data.organizationEmail && data.organizationPhone && 
           data.organizationAddress;
  }
  return true;
}, {
  message: "All organization fields are required",
  path: ["organizationName"],
});

type RegisterFormValues = z.infer<typeof registerFormSchema>;

const RegisterForm = () => {
  const { signUp, isLoading } = useAuth();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<{
    registrationCertificate?: File;
    taxExemptionCertificate?: File;
    addressProof?: File;
  }>({});

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      userType: "donor",
      idType: "aadhar",
      idNumber: "",
      termsAccepted: false,
      organizationName: "",
      organizationEmail: "",
      organizationPhone: "",
      organizationAddress: "",
    },
  });

  const handleFileChange = (field: string, file: File) => {
    setSelectedFiles(prev => ({ ...prev, [field]: file }));
    form.setValue(field as any, file);
  };

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      console.log("Form submitted with data:", data);
      
      await signUp(data.email, data.password, {
        name: data.name,
        phone: data.phone,
        userType: data.userType,
        idType: data.idType,
        idNumber: data.idNumber,
        organizationName: data.organizationName,
        organizationEmail: data.organizationEmail,
        organizationPhone: data.organizationPhone,
        organizationAddress: data.organizationAddress,
        // Files are handled separately
      });
      
      toast({
        title: "Registration Successful",
        description: "Your account has been created successfully!",
      });
      
      setIsSuccess(true);
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center animate-fade-in max-w-md mx-auto">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Registration Successful!
        </h3>
        <p className="text-gray-600 mb-6">
          Your account has been created successfully. Please check your email to verify your account.
        </p>
        <div className="space-y-4">
          <Link to="/login">
            <Button className="w-full bg-dilse-500 hover:bg-dilse-600">
              Login to Your Account
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="w-full border-dilse-500 text-dilse-600 hover:bg-dilse-50">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Create Your Account
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                      className="form-input-focus pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
                <div className="mt-2 text-xs text-gray-500">
                  Password must be at least 8 characters and include uppercase, lowercase, and numbers.
                </div>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                      className="form-input-focus pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>I am registering as a</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="donor" id="donor" />
                      <label htmlFor="donor" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Donor
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="organization" id="organization" />
                      <label htmlFor="organization" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Organization
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="space-y-6 border p-4 rounded-md bg-gray-50">
            <div className="flex items-center gap-2">
              <IdCard className="h-5 w-5 text-dilse-600" />
              <h3 className="text-sm font-semibold text-gray-700">Government ID Verification</h3>
            </div>
            <p className="text-xs text-gray-500">ID verification helps us ensure all donors are genuine and prevents fake accounts</p>
            
            <FormField
              control={form.control}
              name="idType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ID type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="aadhar">Aadhar Card</SelectItem>
                      <SelectItem value="pan">PAN Card</SelectItem>
                      <SelectItem value="driving">Driving License</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your ID number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="terms"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-dilse-600 hover:underline"
                    >
                      terms and conditions
                    </Link>
                    {" "}and{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-dilse-600 hover:underline"
                    >
                      privacy policy
                    </Link>
                  </label>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          {form.watch("userType") === "organization" && (
            <>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Details</h3>
                
                <FormField
                  control={form.control}
                  name="organizationName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter organization name" {...field} className="form-input-focus" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organizationEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Email</FormLabel>
                      <FormControl>
                        <Input placeholder="org@example.com" {...field} className="form-input-focus" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organizationPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 9876543210" {...field} className="form-input-focus" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organizationAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full address" {...field} className="form-input-focus" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4 mt-6">
                  <h4 className="text-sm font-semibold text-gray-900">Required Documents</h4>
                  
                  <FormField
                    control={form.control}
                    name="registrationCertificate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Registration Certificate</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => e.target.files?.[0] && handleFileChange("registrationCertificate", e.target.files[0])}
                            className="form-input-focus"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="taxExemptionCertificate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>12A/80G Certificate</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => e.target.files?.[0] && handleFileChange("taxExemptionCertificate", e.target.files[0])}
                            className="form-input-focus"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="addressProof"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Proof</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => e.target.files?.[0] && handleFileChange("addressProof", e.target.files[0])}
                            className="form-input-focus"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </>
          )}
          
          <Button
            type="submit"
            className="w-full bg-dilse-500 hover:bg-dilse-600 py-6"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-dilse-600 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
