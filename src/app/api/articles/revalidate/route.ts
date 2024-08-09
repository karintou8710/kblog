import { NextRequest, NextResponse } from 'next/server'
import { ZodError } from 'zod'

import { revalidateArticle } from '@/server/libs/revalidate'
import { articleRevalidateSchema } from '@/server/libs/schema'

export async function POST(request: NextRequest) {
  try {
    const { id } = articleRevalidateSchema.parse(await request.json())
    revalidateArticle(id)

    return NextResponse.json({ message: 'revalidate articles' })
  } catch (e) {
    if (e instanceof ZodError || e instanceof SyntaxError) {
      return NextResponse.json(
        { message: 'incorrect input' },
        {
          status: 400,
        },
      )
    }

    console.error(e)

    return NextResponse.json(
      { message: 'unexpected error' },
      {
        status: 500,
      },
    )
  }
}
