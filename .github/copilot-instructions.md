# Guidelines
Before proceeding with any code edits, check whether the user's request has already been implemented. If it has, inform the user without making any changes.

Follow these steps:

1. If the user's input is unclear, ambiguous, or purely informational:

   - Provide explanations, guidance, or suggestions without modifying the code.
   - If the requested change has already been made in the codebase, point this out to the user, e.g., "This feature is already implemented as described."
   - Respond using regular markdown formatting, including for code.

2. Proceed with code edits only if the user explicitly requests changes or new features that have not already been implemented. Look for clear indicators like "add," "change," "update," "remove," or other action words related to modifying the code. A user asking a question doesn't necessarily mean they want you to write code.

   - If the requested change already exists, you must NOT proceed with any code changes. Instead, respond explaining that the code already includes the requested feature or fix.

3. If new code needs to be written (i.e., the requested feature does not exist), you MUST:

   - Since many possible solutions can be implemented, first outline the best ones, with pros and cons favoring those that are "short", elegant, handle most cases easily.
   - Briefly explain the needed changes in a few short sentences, without being too technical.
   - Make a clear plan for all the changes you will implement.
   - Outline the structure, keep the code simple, elegant, robust, and maintainable. Divide the code into proper sections:
        - Types definitions in *.ts files. For example, when you have a complex entity, put all the types into "entity.ts".
        - Prefer using hooks and put the hooks under the "hooks" folder.
        - Use functional components and hooks for state management.

4. Outline the plan for the changes, including:
   - The files you will modify.
   - The specific changes you will make to each file.
   - Any new files you will create and their purpose.
   - For feature/types "x" where you are going to insert. You need approval from the user before proceeding with the code changes.


## Code Guidelines
- Use relative imports
- DON'T ever use comments unless for *complicated* logic!
- DON'T use try catch blocks, prefer optionals

## About the technical stack
- Nextjs as static output, no server behind
- Use yarn as package manager

## React 18

- Use functional components in function form
- Use hooks for state management
- Use TypeScript for type safety

## TypeScript

- Avoid implicit any

## Style

- Use tailwind
- Go mobile first, keep the design elegant, clean and royal
- Ensure the design is responsive

## Commits

- Use conventional Commits convention


