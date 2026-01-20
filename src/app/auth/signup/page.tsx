"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "../../../../client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Loader2, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  CreditCard, 
  Mail, 
  Lock, 
  User, 
  MessageCircle,
  Sparkles,
  Eye,
  EyeOff
} from "lucide-react";

// Loading component for Suspense boundary
function SignupLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-green-600 mx-auto" />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

// Step 1: Sign Up Form
function SignUpForm({ 
  onNext, 
  formData, 
  setFormData,
  loading 
}: { 
  onNext: () => void;
  formData: any;
  setFormData: (data: any) => void;
  loading: boolean;
}) {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      // Sign up with Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          },
        },
      });

      if (authError) {
        setError(authError.message);
        return;
      }

      if (authData.user) {
        onNext();
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="pl-10"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="pl-10"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>


    <div className="space-y-2">
        <Label htmlFor="whatsapp">Whatsapp Digit</Label>
        <div className="relative">
          <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="whatsapp"
            type="tel"
            placeholder="+234..."
            className="pl-10"
            value={formData.whatsapp}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\+?\d*$/.test(val)) {
                setFormData({ ...formData, whatsapp: val });
              }
            }}
          />
        </div>
      </div>


      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="pl-10 pr-10"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <Eye className="h-4 w-4" /> 
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center">{error}</div>
      )}

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Creating Account...
          </>
        ) : (
          <>
            Create Account
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}

// Step 2: OTP Verification
function OTPForm({ 
  onNext, 
  onBack,
  formData,
  setFormData,
  loading 
}: { 
  onNext: () => void;
  onBack: () => void;
  formData: any;
  setFormData: (data: any) => void;
  loading: boolean;
}) {
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.otp || formData.otp.length !== 6) {
      setError("Please enter a valid 6-digit code");
      return;
    }

    // Simulate OTP verification (in production, verify with Supabase)
    if (formData.otp === "123456" || formData.otp.length === 6) {
      onNext();
    } else {
      setError("Invalid verification code");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold">Check your email</h3>
        <p className="text-gray-600 text-sm mt-1">
          We've sent a verification code to <span className="font-medium text-green-600">{formData.email}</span>
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="otp">Verification Code</Label>
        <Input
          id="otp"
          type="text"
          placeholder="Enter 6-digit code"
          className="text-center text-2xl tracking-widest"
          maxLength={6}
          value={formData.otp}
          onChange={(e) => setFormData({ ...formData, otp: e.target.value.replace(/\D/g, '') })}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center">{error}</div>
      )}

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Verifying...
          </>
        ) : (
          "Verify Email"
        )}
      </Button>

      <div className="text-center">
        <Button
          type="button"
          variant="link"
          className="text-gray-500"
          disabled={resendTimer > 0}
          onClick={() => {
            setResendTimer(30);
            // Simulate resend
          }}
        >
          {resendTimer > 0 ? `Resend code in ${resendTimer}s` : "Resend code"}
        </Button>
      </div>

      <Button type="button" variant="ghost" className="w-full" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Sign Up
      </Button>
    </form>
  );
}

// Step 3: Payment (Simulated Paystack)
function PaymentForm({ 
  onNext, 
  onBack,
  formData,
  setFormData,
  loading 
}: { 
  onNext: () => void;
  onBack: () => void;
  formData: any;
  setFormData: (data: any) => void;
  loading: boolean;
}) {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { cardNumber, expiry, cvv, cardName } = formData;

    if (!cardNumber || !expiry || !cvv || !cardName) {
      setError("Please fill in all card details");
      return;
    }

    // Basic validation
    if (cardNumber.replace(/\s/g, '').length < 16) {
      setError("Please enter a valid card number");
      return;
    }

    try {
      // Create subscription record with 'pending' status
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Insert subscription record
        const { error: subError } = await supabase.from("subscriptions").insert({
          user_id: user.id,
          plan: "pro",
          amount: 5000,
          payment_status: "pending",
          created_at: new Date().toISOString(),
        });

        if (subError) {
          console.error("Error creating subscription:", subError);
        }

        // Simulate payment processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Update subscription to 'paid' status
        const { error: updateError } = await supabase
          .from("subscriptions")
          .update({ payment_status: "paid" })
          .eq("user_id", user.id)
          .eq("plan", "pro");

        if (updateError) {
          console.error("Error updating subscription:", updateError);
        }

        onNext();
      }
    } catch (err) {
      setError("Payment failed. Please try again.");
      console.error(err);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="w-8 h-8 text-yellow-600" />
        </div>
        <h3 className="text-lg font-semibold">Payment</h3>
        <p className="text-gray-600 text-sm mt-1">
          Complete your subscription to unlock all features
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <div className="text-sm text-gray-600">Pro Plan</div>
        <div className="text-2xl font-bold text-green-600">₦5,000/month</div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardName">Cardholder Name</Label>
          <Input
            id="cardName"
            type="text"
            placeholder="Name on card"
            value={formData.cardName}
            onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <div className="relative">
            <Input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              className="pl-10"
              maxLength={19}
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: formatCardNumber(e.target.value) })}
            />
            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input
              id="expiry"
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              value={formData.expiry}
              onChange={(e) => setFormData({ ...formData, expiry: formatExpiry(e.target.value) })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="text"
              placeholder="123"
              maxLength={4}
              value={formData.cvv}
              onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, '') })}
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center">{error}</div>
      )}

      <div className="flex gap-3">
        <Button type="button" variant="outline" className="flex-1" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Pay ₦5,000
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        🔒 Secured by Paystack (Simulated)
      </p>
    </form>
  );
}

// Step 4: Success
function SuccessView({ formData }: { formData: any }) {
  const router = useRouter();

  return (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900">Welcome to Pro!</h3>
        <p className="text-gray-600 mt-2">
          Your subscription is now active. You have full access to all Pro features.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-gray-700">Priority phone support</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-gray-700">Remote diagnostics</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-gray-700">WhatsApp support</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-gray-700">Urgent issue escalation</span>
        </div>
      </div>

      <div className="space-y-3">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700"
          onClick={() => router.push("/chat")}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Start Chatting
        </Button>

        <a
          href="https://wa.me/2349020935919"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Contact via WhatsApp
        </a>
      </div>

      <p className="text-sm text-gray-500">
        A confirmation email has been sent to <span className="font-medium text-green-600">{formData.email}</span>
      </p>
    </div>
  );
}

// Progress Indicator
function ProgressIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const steps = ["Account", "Verify", "Payment", "Done"];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                index + 1 <= currentStep
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1 < currentStep ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </div>
            <span className={`text-xs mt-1 ${index + 1 <= currentStep ? "text-green-600 font-medium" : "text-gray-400"}`}>
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <Separator className="bg-gray-200" />
        <div 
          className="absolute top-0 left-0 h-0.5 bg-green-600 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}

// Main Signup Content Component
function SignupContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "+",
    password: "",
    otp: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  // Show plan badge if plan=pro
  const isProPlan = plan === "pro";

  const totalSteps = 4;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Plan Badge */}
          {isProPlan && (
            <div className="mb-6 flex justify-center">
              <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                Pro Plan Selected - ₦5,000/mo
              </Badge>
            </div>
          )}

          <Card className="shadow-xl">
            <CardHeader className="text-center pb-0">
              <CardTitle className="text-2xl">
                {currentStep === 1 && "Create Your Account"}
                {currentStep === 2 && "Verify Your Email"}
                {currentStep === 3 && "Complete Payment"}
                {currentStep === 4 && "You're All Set!"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Fill in your details to get started"}
                {currentStep === 2 && "Enter the verification code sent to your email"}
                {currentStep === 3 && "Secure payment to activate your subscription"}
                {currentStep === 4 && "Your Pro subscription is now active"}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              {/* Progress Indicator */}
              {currentStep < 4 && (
                <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
              )}

              {/* Step Content */}
              {currentStep === 1 && (
                <SignUpForm
                  onNext={() => setCurrentStep(2)}
                  formData={formData}
                  setFormData={setFormData}
                  loading={loading}
                />
              )}

              {currentStep === 2 && (
                <OTPForm
                  onNext={() => setCurrentStep(3)}
                  onBack={() => setCurrentStep(1)}
                  formData={formData}
                  setFormData={setFormData}
                  loading={loading}
                />
              )}

              {currentStep === 3 && (
                <PaymentForm
                  onNext={() => setCurrentStep(4)}
                  onBack={() => setCurrentStep(2)}
                  formData={formData}
                  setFormData={setFormData}
                  loading={loading}
                />
              )}

              {currentStep === 4 && <SuccessView formData={formData} />}
            </CardContent>
          </Card>

          {/* Trust Badges */}
          {currentStep < 4 && (
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                Secure
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Verified
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                24/7 Support
              </span>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <FloatingChat />
    </main>
  );
}

// Main Page Component with Suspense
export default function SignupPage() {
  return (
    <Suspense fallback={<SignupLoading />}>
      <SignupContent />
    </Suspense>
  );
}
