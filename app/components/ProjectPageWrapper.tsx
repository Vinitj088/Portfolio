'use client'

import { ReactNode } from 'react'
import { FadeIn } from './FadeIn'
import { CustomCursor } from './CustomCursor'
import { ScrollIndicator } from './ScrollIndicator'

interface ProjectPageWrapperProps {
  children: ReactNode
}

export function ProjectPageWrapper({ children }: ProjectPageWrapperProps) {
  return (
    <>
      <CustomCursor />
      <ScrollIndicator />
      <div className="min-h-screen bg-background text-foreground">
        {children}
      </div>
    </>
  )
}

export function ProjectSection({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      {children}
    </FadeIn>
  )
}
