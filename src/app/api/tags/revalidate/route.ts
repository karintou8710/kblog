import { NextRequest, NextResponse } from 'next/server'

import { revalidateTags } from '@/features/article/server/revalidate'

export async function POST(request: NextRequest) {
  revalidateTags()
  return NextResponse.json({ message: 'revalidate tags' })
}
