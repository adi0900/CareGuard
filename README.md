# CareGuard

<p align="center">
  <img width="1200" height="475" alt="CareGuard Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</p>

<p>
  <a href="https://careguard.vercel.app">
    <img src="https://img.shields.io/badge/Official_Website-CareGuard-black?style=for-the-badge&logo=vercel" alt="Official Website" />
  </a>
</p>

CareGuard is a patient advocacy platform that analyzes healthcare denials, detects bias, and generates evidence-backed appeal letters—in minutes.

It is not trying to be a generic health tracker. The point is to provide a single, focused tool that pushes back against the system: stronger evidence, better clinical reasoning, tighter medical citations, and less anxiety for patients.

[![Tech Stack](https://img.shields.io/badge/Stack-React_%7C_Vite_%7C_Tailwind-2563eb?style=flat-square)](https://github.com/adi0900/CareGuard)
[![AI Engine](https://img.shields.io/badge/Powered_By-Google_Gemini-111827?style=flat-square)](#how-to-use-it)
[![Focus](https://img.shields.io/badge/Focus-Patient_Advocacy-6b7280?style=flat-square)](#what-this-repo-is-actually-for)

## What This Repo Is Actually For

Most healthcare denial processes are confusing, biased, and heavily stacked against patients. Patients receive a denial, get overwhelmed by the jargon, and give up—72% never challenge them.

CareGuard is meant to intervene when patients feel powerless. This application uses AI to change how patients fight back before the window to appeal closes.

In practice, that means:

- denial analysis should feel empathetic, clinical, and bias-aware
- appeal letters should feel structured, credible, and exact
- both should read like a professional medical advocate made the decisions, rather than a generic template

## The Core Flow

CareGuard currently stays deliberately narrow and focused on the appeal pipeline.

`Upload & Validation`
For securely reading denial letters (PDFs, images, or text) and validating the patient's emotional state before diving into the legalities.

`Analysis & Appeal Generation`
For performing a fairness audit against clinical standards and writing a ready-to-send letter with exact medical citations.

That is the real scope of the application right now. More features should only appear when they solve a separate patient problem, not when they restate the same one in a new wrapper.

## How To Use It

If you want to run CareGuard locally:

```bash
git clone https://github.com/adi0900/CareGuard.git
cd CareGuard
npm install
```

Set up your environment variables by copying `.env.example` to `.env.local` and adding your API key:
```env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

Start the application:
```bash
npm run dev
```

CareGuard is currently built using:
- React 19
- Vite
- Tailwind CSS
- Google Gemini AI

## Working Style

CareGuard performs better when the input has a real clinical center of gravity. Short, vague complaints usually flatten the result.

Useful inputs:
- The original denial letter text or document
- Medical history context
- Specific treatments, tests, or medications denied
- The reason the insurance company provided for the denial (e.g., "Not medically necessary")

Appeal Example:
```text
The insurance company denied a cardiac catheterization for a 56-year-old female patient with a history of hypertension, stating it is "not medically necessary." The patient has been experiencing recurring chest pain. Generate a clinical appeal referencing standard cardiology protocols.
```

## Repository Layout

```text
README.md
package.json
src/
  components/
    ui.tsx
  layouts/
    RootLayout.tsx
  pages/
    AnalyzingScreen.tsx
    AppealDetailScreen.tsx
    LandingPage.tsx
    MyAppealsScreen.tsx
    ReviewScreen.tsx
    UploadScreen.tsx
```

## Why The Application Is Focused

This repo is intentionally biased toward restraint and high-impact actions.

- one strong appeal pipeline is better than five shallow health-tracking features
- a new screen should earn its place through a real patient workflow gap
- the UI should clarify the complex legal process, not make the patient feel more overwhelmed

That bias is part of the product, not a temporary limitation.

## Support And Feedback

If you want to suggest improvements or report issues:

- open an issue or pull request on GitHub
- visit the deployed site: [https://careguard.vercel.app](https://careguard.vercel.app)

## A Few Direct Answers

### Does this store medical data?

No. CareGuard processes the denial information locally in the session or via secure API calls, focusing on privacy. It does not act as a permanent Electronic Health Record (EHR).

### Is it only for one kind of health insurance?

No. The analysis engine is broad enough to handle standard US healthcare claims, including prior authorization denials, out-of-network claims, and "not medically necessary" rejections.

### What do the generated appeals really do?

They act as a professional medical advocate. They push the insurance company toward a re-evaluation by using stronger language about clinical standards, fairness, and exact medical necessity guidelines.
