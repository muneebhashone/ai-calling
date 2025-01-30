"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Sparkles, Send, User, Mail, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  useCase: z.string().min(10, {
    message: "Use case must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      useCase: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-2 bg-white rounded-2xl shadow-md mb-4">
              <span className="px-4 py-2 rounded-xl bg-black text-white font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Early Access
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Join the Waitlist
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Be among the first to experience the future of AI voice
              technology. Tell us about your use case and get priority access.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="Enter your name"
                            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <Input
                            placeholder="Enter your email"
                            type="email"
                            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="useCase"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Use Case
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <Textarea
                            placeholder="Describe how you plan to use our AI voice technology"
                            className="pl-10 min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-6 text-lg font-medium"
                >
                  <span className="flex items-center justify-center gap-2">
                    Join Waitlist
                    <Send className="w-5 h-5" />
                  </span>
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            By joining the waitlist, you will receive updates about our launch
            and early access opportunities.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
