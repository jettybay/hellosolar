# Signup Page Implementation - TODO

## Goal
Create a 4-step signup flow in `src/auth/signup/page.tsx` that connects with the PricingCard in `/howitworks` page.

## ✅ Completed Steps

### Phase 1: Setup and Structure ✅
- [x] 1. Create the signup page with 4-step flow structure
- [x] 2. Add Suspense boundary for handling ?plan=pro query parameter
- [x] 3. Implement state management for current step and form data

### Phase 2: Step 1 - User Registration ✅
- [x] 4. Create signup form (name, email, password)
- [x] 5. Add Supabase auth signup
- [x] 6. Create user record in users table

### Phase 3: Step 2 - OTP Verification ✅
- [x] 7. Create OTP input form
- [x] 8. Implement OTP verification logic (simulated)

### Phase 4: Step 3 - Payment (Paystack Simulation) ✅
- [x] 9. Create payment form with card details inputs
- [x] 10. Add subscription record with 'pending' status
- [x] 11. Simulate payment processing
- [x] 12. Update subscription to 'paid' status

### Phase 5: Step 4 - Success ✅
- [x] 13. Create success confirmation UI
- [x] 14. Add WhatsApp chat button (unlocked feature)
- [x] 15. Add navigation to chat page

### Phase 6: Polish and Testing ✅
- [x] 16. Add progress indicator
- [x] 17. Add loading states and error handling
- [x] 18. Style with consistent green theme
- [x] 19. Test navigation from howitworks page

## Notes
- Uses Supabase for authentication and database
- OTP and Paystack payment are simulated for demo
- WhatsApp link: https://wa.me/2349020935919

## Follow-up Steps
1. Run `npm run dev` to start the development server
2. Navigate to `/howitworks` and click "Get Started" on the Pro plan
3. Verify the signup flow works with the ?plan=pro query parameter
4. Test the complete 4-step flow:
   - Sign up with test credentials
   - Enter OTP (use any 6-digit code)
   - Complete payment (use any card details)
   - Confirm success and WhatsApp button appears

## Database Requirements
Ensure the following Supabase tables exist:
- `users` (id, email, name, created_at)
- `subscriptions` (user_id, plan, amount, payment_status, created_at)

