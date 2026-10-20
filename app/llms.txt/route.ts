import { site, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

// AI-readable site summary (llmstxt.org). Every fact here must also be on the page:
// update this in the same commit as any change to services, pricing, or contact details.
const body = `# ${site.name}

> ${site.name} builds secure AI automation for small businesses in the
> ${site.city} metro area. Led by ${site.founder.name} (${site.founder.certification.name} certified).
> Free 20-minute workflow audit: ${site.phone.display}.

## About
${site.name} (${site.legalName}) is an AI systems integration practice based in
${site.city}, led by founder ${site.founder.name}. ${site.name} builds AI-powered
systems into the tools a business already uses (CRM, inbox, scheduling tool,
intake forms), with no rip-and-replace. ${site.founder.name} holds a
${site.founder.certification.name} certification (${site.founder.certification.year}).

## Services
- Free Workflow Audit (20 minutes): maps where a team is losing time; the
  client gets the findings either way.
- Workflow Automation: AI-driven systems for quote follow-ups, data entry,
  appointment scheduling, and document generation.
- System Integration: connects AI into existing tools such as QuickBooks,
  HubSpot, and Salesforce.
- Custom AI Tools: internal tools, dashboards, and assistants built around how
  a team actually works.
- Ongoing Support & Optimization: monitoring, adjusting, and improving deployed
  systems.

## Pricing
- Every engagement starts with the free 20-minute workflow audit.
- After the audit, clients get a flat quote before any work begins. No hourly
  billing.

## Security
- Least-privilege access on named accounts; no shared logins.
- AI and integration services run under accounts the client business owns.
- Built on AI providers' business and API plans, which don't train models on
  client data by default.
- Automations keep a record of what they did; access is removed when an
  engagement ends.
- NDA available on request.

## Service area
${site.city} and the Charlotte metro area. Local, in-person engagements with
small businesses (10-200 employees), primarily contractors, professional
services, real estate, and local retail.

## Contact
- Phone: ${site.phone.display}
- Email: ${site.email}
- Name: ${site.founder.name}, ${site.founder.role}
- Website: ${siteUrl}

## Key pages
- [Home](${siteUrl}/): services, process, security, FAQ, and free audit booking.
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
