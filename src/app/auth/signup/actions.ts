'use server'

import { supabaseServer } from '@/lib/supabaseServer'

export async function createSubscription(userId: string, plan: string, amount: number) {
  try {
    const { error } = await supabaseServer.from('subscriptions').insert({
      user_id: userId,
      plan,
      amount,
      payment_status: 'pending',
      created_at: new Date().toISOString(),
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to create subscription' }
  }
}

export async function updateSubscriptionStatus(userId: string, plan: string) {
  try {
    const { error } = await supabaseServer
      .from('subscriptions')
      .update({ payment_status: 'paid' })
      .eq('user_id', userId)
      .eq('plan', plan)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to update subscription' }
  }
}
