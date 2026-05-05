"use client";

import { useEffect } from "react";

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<Record<string, unknown>>;
};

type ModelContextApi = {
  registerTool?: (tool: WebMcpTool) => unknown;
  provideContext?: (context: { tools: WebMcpTool[] }) => unknown;
};

type NavigatorWithModelContext = Navigator & {
  modelContext?: ModelContextApi;
};

function navigate(path: string): void {
  window.location.assign(path);
}

export function WebMcpProvider() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const modelContext = (navigator as NavigatorWithModelContext).modelContext;
    if (!modelContext) {
      return;
    }

    const tools: WebMcpTool[] = [
      {
        name: "open_public_page",
        description: "Navigate to a public PM Risk Guard page.",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              enum: ["/", "/about", "/pricing", "/faq", "/contact", "/privacy"],
            },
          },
          required: ["path"],
          additionalProperties: false,
        },
        execute: async (input) => {
          const path = typeof input.path === "string" ? input.path : "/";
          navigate(path);

          return {
            ok: true,
            path,
          };
        },
      },
      {
        name: "open_extension_signup",
        description: "Open PM Risk Guard signup page.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        execute: async () => {
          navigate("/signup");

          return {
            ok: true,
            path: "/signup",
          };
        },
      },
    ];

    try {
      if (typeof modelContext.registerTool === "function") {
        for (const tool of tools) {
          modelContext.registerTool(tool);
        }
      } else if (typeof modelContext.provideContext === "function") {
        modelContext.provideContext({ tools });
      }
    } catch {
      // Ignore unsupported browser/runtime implementations.
    }
  }, []);

  return null;
}
