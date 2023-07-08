/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/chat": {
    /** Chat with OpenAI API */
    post: {
      requestBody: {
        content: {
          "application/json": components["schemas"]["ChatRequest"];
        };
      };
      responses: {
        /** @description Chat response */
        200: {
          content: {
            "application/json": components["schemas"]["ChatResponse"];
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    ChatRequest: {
      userId: string;
      message: string;
    };
    ChatResponse: {
      message: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
