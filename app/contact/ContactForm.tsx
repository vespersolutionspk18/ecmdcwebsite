import * as React from "react"

import { FaAngleRight } from "react-icons/fa6";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <Card className="w-full border-0 flex flex-col p-10 justify-center shadow-none">
      <CardHeader>
        <h3 className="text-5xl text-slate-800 font-light">Get in Touch</h3>
        <CardDescription>We&apos;ll do our best to get back to you ASAP.</CardDescription>
      </CardHeader>
      
        <form>
          <div className="flex flex-col w-full items-start gap-4">
            <div className="flex flex-row gap-5 justify-between items-start mx-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" className="p-5"/>
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" className="p-5"/>
            </div>
            </div>
            <div className="flex flex-row gap-5 justify-between items-start mx-6 mb-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your Phone Number" className="p-5"/>
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Enter your company name" className="p-5"/>
            </div>
            </div>
            <div className="flex flex-col gap-1.5 w-full pr-12 justify-between items-start mx-6 mb-5">
            
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Write your message" className="p-5"/>
         
            
           
            </div>
            
          </div>
        </form>
     
      <CardFooter className="flex justify-start">
      <Button className="px-5 py-6 text-lg font-light  hover:bg-blue-600">Submit  <FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
        
      </CardFooter>
    </Card>
  )
}
