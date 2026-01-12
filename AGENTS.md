# Agents in this repository

本專案是一個 **Next.js（App Router）+ TypeScript + Tailwind CSS** 專案。  
Jules 被允許在此專案中建立頁面、Layout 與 UI 元件，但**不得影響 routing、後端或系統設定**。

目標是：  
讓 Jules 可以安全地新增頁面與切版，而不會破壞既有架構與風格。

---

## Project Overview

**Framework**

- Next.js (App Router)
- TypeScript
- Tailwind CSS

**Folder conventions**

- Pages: `/app`
- Shared UI Components: `/components`
- Layouts: `/app/(layout)` or `/app/layout.tsx`
- Styling: Tailwind CSS only (no inline CSS unless absolutely necessary)

---

## UI Page Agent

This agent is responsible for creating and editing UI pages and components.

### Allowed

- Create new routes and pages under `/app`
- Add or modify React components under `/components`
- Implement UI based on text specs or screenshots
- Build responsive layouts using Tailwind

### Not allowed

- Modify API routes
- Change authentication logic
- Modify backend, database, or server configuration

### How to work

- If a page does not exist, create a new folder under `/app`
- Use **Server Components by default**
- Only use `"use client"` when interactivity is required (forms, modals, etc.)
- Reuse existing components whenever possible

---

## Design Rules

### Use

- Tailwind CSS utility classes
- Mobile-first responsive design
- Semantic HTML

### Avoid

- Inline styles
- Hard-coded colors (unless already in Tailwind config)
- Duplicated or copy-pasted components

---

## Page Creation Rules

When creating a new page:

1. Create a new folder under `/app` that matches the route name
2. Add `page.tsx`
3. Use an existing layout if available
4. Add basic SEO metadata if applicable

Example:

To create `/pricing`:
