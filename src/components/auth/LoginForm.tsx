
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
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
  idType: z.enum(["aadhar", "pan", "driving", "none"]).optional(),
  idNumber: z.string().optional()
    .refine(
      (val, ctx) => {
        // If an ID type is selected, ID number is required
        if (ctx.data.idType && ctx.data.idType !== "none" && (!val || val.length < 3)) {
          return false;
        }
        return true;
      },
      {
        message: "ID number is required when ID type is selected",
      }
    ),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const { signIn, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showIdProof, setShowIdProof] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
      idType: "none",
      idNumber: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    await signIn(data.email, data.password);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Log In to Your Account
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>Password</FormLabel>
                  <Link to="/forgot-password" className="text-sm text-dilse-600 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
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
              </FormItem>
            )}
          />
          
          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="rememberMe"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <label
                      htmlFor="rememberMe"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </FormItem>
              )}
            />
            
            <Button 
              type="button" 
              variant="ghost" 
              className="text-sm text-dilse-600 hover:underline p-0 h-auto font-medium"
              onClick={() => setShowIdProof(!showIdProof)}
            >
              {showIdProof ? "Hide ID Verification" : "Verify with Gov ID"}
            </Button>
          </div>
          
          {showIdProof && (
            <div className="space-y-6 border p-4 rounded-md bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-700">Government ID Verification</h3>
              <p className="text-xs text-gray-500">This helps us verify real donors and prevent fake accounts</p>
              
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
                        <SelectItem value="none">Skip Verification</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {form.watch("idType") && form.watch("idType") !== "none" && (
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
              )}
            </div>
          )}
          
          <Button
            type="submit"
            className="w-full bg-dilse-500 hover:bg-dilse-600 py-6"
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Log In"}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-dilse-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
