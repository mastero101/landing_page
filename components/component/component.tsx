import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fff] text-[#000]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <RocketIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Nehoraj</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Entrepreneurial Potential
                  </h1>
                  <p className="max-w-[600px] text-[#666] md:text-xl">
                    Nehoras offers a comprehensive suite of services to help entrepreneurs and small businesses thrive.
                    From business planning to funding and mentorship, we're here to support your journey.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#000] px-8 text-sm font-medium text-[#fff] shadow transition-colors hover:bg-[#333] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#f5f5f5] px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nehoras provides a comprehensive suite of services to help entrepreneurs and small businesses thrive.
                  From business planning to funding and mentorship, we're here to support your journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Business Planning</h3>
                      <p className="text-[#666]">Get expert guidance on developing a comprehensive business plan.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Funding &amp; Investment</h3>
                      <p className="text-[#666]">Access funding opportunities and connect with investors.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Mentorship &amp; Coaching</h3>
                      <p className="text-[#666]">Receive personalized guidance from experienced entrepreneurs.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Legal &amp; Compliance</h3>
                      <p className="text-[#666]">
                        Ensure your business is set up for success with legal and compliance support.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=960"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#f5f5f5] px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the entrepreneurs and small business owners we've helped on their journey to success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <Card>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-medium">
                        "Nehoras has been an invaluable partner in growing\n my business. Their guidance and support
                        have been\n instrumental to my success."
                      </p>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">John Doe, Founder</p>
                          <p className="text-sm text-[#666]">Acme Co.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Card>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-medium">
                        "Nehoras has been a game-changer for my business.\n Their comprehensive services and expert
                        guidance\n have helped me take my startup to the next level."
                      </p>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Sarah Anderson, Founder</p>
                          <p className="text-sm text-[#666]">Startup X</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#f5f5f5] px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable Solutions for Your Business
                </h2>
                <p className="max-w-[900px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your needs and budget. Flexible options to support your entrepreneurial
                  journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for new entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-4xl font-bold">$49</p>
                    <p className="text-sm text-[#666]">per month</p>
                  </div>
                  <ul className="space-y-2 text-[#666]">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Business planning assistance
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Access to funding opportunities
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      1-on-1 mentorship sessions
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Legal and compliance support
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-4xl font-bold">$99</p>
                    <p className="text-sm text-[#666]">per month</p>
                  </div>
                  <ul className="space-y-2 text-[#666]">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Everything in Starter, plus:
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Priority access to funding
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Dedicated account manager
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Advanced business analytics
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For established businesses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-4xl font-bold">$199</p>
                    <p className="text-sm text-[#666]">per month</p>
                  </div>
                  <ul className="space-y-2 text-[#666]">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Everything in Pro, plus:
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Customized growth strategies
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Dedicated team of experts
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Exclusive networking events
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#f5f5f5] px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Let's Discuss Your Entrepreneurial Goals
                </h2>
                <p className="max-w-[900px] text-" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#f5f5f5] py-6 text-center mt-auto">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 pr-[8px]" prefetch={false}>
                Features
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 pr-[8px]" prefetch={false}>
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 pr-[8px]" prefetch={false}>
                Testimonials
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 pr-[8px]" prefetch={false}>
                Contact
              </Link>
            </div>
            <p className="text-sm text-[#666]">&copy; 2024 Nehoraj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
