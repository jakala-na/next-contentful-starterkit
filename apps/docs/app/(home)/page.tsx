import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Layout, Database, TestTube, Puzzle, Eye, Rocket, GitMerge } from 'lucide-react';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Next.js Contentful Starter
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Jumpstart your Next.js Contentful project with Next.js App Router, TypeScript and GraphQL.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/docs">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why This Starterkit?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Building content websites with Next.js and Contentful can be simple, we&apos;ve also learned it can
                  become complex quite quickly. This starterkit simplifies the process, providing a solid foundation
                  with essential features that focus on managing content at scale.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Zap className="h-8 w-8 mb-2 text-yellow-500" />
                <h3 className="text-xl font-bold text-center">Next.js App Router</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Leverage modern React Server Components for efficient data fetching and lean client bundles.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Database className="h-8 w-8 mb-2 text-blue-500" />
                <h3 className="text-xl font-bold text-center">GraphQL + gql.tada</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Benefit from GraphQL with TypeScript integration for type-safe data fetching.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <TestTube className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="text-xl font-bold text-center">Cypress Testing</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Configured Cypress.io suite for both Component and E2E testing with BDD-style syntax.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Puzzle className="h-8 w-8 mb-2 text-purple-500" />
                <h3 className="text-xl font-bold text-center">Reference Component Architecture</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  UI best practices with Tailwind and shadcn/ui.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Layout className="h-8 w-8 mb-2 text-indigo-500" />
                <h3 className="text-xl font-bold text-center">Component Renderer</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Render full component trees using a mapping of contentTypes to React components.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Eye className="h-8 w-8 mb-2 text-red-500" />
                <h3 className="text-xl font-bold text-center">Draft Mode & Live Preview</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Preview mode for Contentful Preview API and Live Preview SDK for real-time content editing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Code className="h-8 w-8 mb-2 text-orange-500" />
                <h3 className="text-xl font-bold text-center">Content Source Maps</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Optional Contentful Content Source Maps for automatic Live Preview SDK annotations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Rocket className="h-8 w-8 mb-2 text-cyan-500" />
                <h3 className="text-xl font-bold text-center">Turborepo</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Showcase multiple packages for design system, CLI tooling, and testing alongside the Next.js app.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <GitMerge className="h-8 w-8 mb-2 text-pink-500" />
                <h3 className="text-xl font-bold text-center">TypeScript Integration</h3>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Full TypeScript support for enhanced developer productivity and code quality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Next.js Contentful Starter by </p>
        <Link href="https://www.jakala.com/">
          <Image src="/jakala-logo.svg" alt="JAKALA logo" width="100" height="50" className="" />
        </Link>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/jakala-na/next-contentful-starterkit"
          >
            GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/docs">
            Documentation
          </Link>
        </nav>
      </footer>
    </div>
  );
}
