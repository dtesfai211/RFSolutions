import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive business setup solutions tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden" id="business-formation">
                <CardHeader className="pb-0">
                  <div className="h-40 w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Business Formation"
                      width={400}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Business Formation</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    Complete company registration services with all necessary documentation and approvals
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Company Registration</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Legal Documentation</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Corporate Bank Account Setup</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Tax Registration</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full rounded-full">Learn More</Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden" id="trade-licensing">
                <CardHeader className="pb-0">
                  <div className="h-40 w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Trade Licensing"
                      width={400}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Trade Licensing</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    Obtain all required trade licenses and permits for your business operations
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Commercial Licenses</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Professional Licenses</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Industry-Specific Permits</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">License Renewals</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full rounded-full">Learn More</Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden" id="office-solutions">
                <CardHeader className="pb-0">
                  <div className="h-40 w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Office Solutions"
                      width={400}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Office Solutions</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    Flexible office spaces, virtual offices, and premium business address services
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Virtual Office Addresses</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Serviced Offices</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Meeting Room Access</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Mail Handling Services</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full rounded-full">Learn More</Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden" id="visa-processing">
                <CardHeader className="pb-0">
                  <div className="h-40 w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Visa Services"
                      width={400}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Visa Services</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    Complete visa processing and immigration services for business owners and employees
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Investor Visas</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Employment Visas</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Family Visas</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Visa Renewals</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full rounded-full">Learn More</Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden" id="banking-support">
                <CardHeader className="pb-0">
                  <div className="h-40 w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Banking Support"
                      width={400}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Banking Support</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    Assistance with corporate banking setup and financial services
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Corporate Account Opening</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Merchant Services</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Banking Relationships</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Financial Documentation</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full rounded-full">Learn More</Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden" id="business-consulting">
                <CardHeader className="pb-0">
                  <div className="h-40 w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Business Consulting"
                      width={400}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl">Business Consulting</CardTitle>
                  <CardDescription className="mt-2 text-gray-500">
                    Expert guidance and strategic consulting for business growth and development
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Market Entry Strategy</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Business Planning</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Growth Consulting</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">Regulatory Compliance</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full rounded-full">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-black py-12 md:py-16 lg:py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start?</h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact our team today to discuss your business needs and get started with our comprehensive
                    services.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="rounded-full bg-white text-black hover:bg-gray-200">Contact us</Button>
                  <Button variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
                    View Pricing
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4">
                    <div className="text-4xl font-bold text-amber-400">500+</div>
                    <div className="text-center text-sm font-medium">Businesses Launched</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4">
                    <div className="text-4xl font-bold text-amber-400">98%</div>
                    <div className="text-center text-sm font-medium">Client Satisfaction</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4">
                    <div className="text-4xl font-bold text-amber-400">24/7</div>
                    <div className="text-center text-sm font-medium">Support Available</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4">
                    <div className="text-4xl font-bold text-amber-400">15+</div>
                    <div className="text-center text-sm font-medium">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> 
  )
}
