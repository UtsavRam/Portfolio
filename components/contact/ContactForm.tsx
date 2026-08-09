"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validation";
import { Button } from "../ui/Button";

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      hp_website: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: result.message || "Thank you! Your message has been received.",
        });
        reset();
      } else {
        setStatusMessage({
          type: "error",
          text: result.error || "Failed to submit message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatusMessage({
        type: "error",
        text: "An unexpected network error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 rounded-xl bg-dark-900 border border-white/10 space-y-6 shadow-gold-glow-sm"
      noValidate
    >
      <div className="flex items-center gap-2 text-gold-accent font-mono text-xs uppercase tracking-wider font-semibold border-b border-white/10 pb-3">
        <Sparkles className="w-4 h-4 text-gold-primary" />
        <span>Direct Message Form</span>
      </div>

      {/* Status Banner */}
      {statusMessage && (
        <div
          className={`p-4 rounded-lg flex items-start gap-3 text-xs sm:text-sm ${
            statusMessage.type === "success"
              ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
              : "bg-red-500/10 border border-red-500/30 text-red-300"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Honeypot hidden input field */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("hp_website")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase tracking-wider">
            Your Name <span className="text-gold-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-colors"
          />
          {errors.name && <p className="text-xs text-red-400 font-mono">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase tracking-wider">
            Your Email <span className="text-gold-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-colors"
          />
          {errors.email && <p className="text-xs text-red-400 font-mono">{errors.email.message}</p>}
        </div>
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-xs font-mono text-gray-300 uppercase tracking-wider">
          Subject <span className="text-gold-primary">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Project Inquiry / Job Opportunity"
          {...register("subject")}
          className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-colors"
        />
        {errors.subject && <p className="text-xs text-red-400 font-mono">{errors.subject.message}</p>}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase tracking-wider">
          Message <span className="text-gold-primary">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Hello Utsav, I'd like to discuss a project..."
          {...register("message")}
          className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-colors resize-none"
        />
        {errors.message && <p className="text-xs text-red-400 font-mono">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
        rightIcon={<Send className="w-4 h-4" />}
      >
        Send Message
      </Button>
    </form>
  );
};
