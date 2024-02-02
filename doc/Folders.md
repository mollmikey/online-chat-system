# Folder Layout

Some things are laid out a little different to how other projects are.

## Pages `/client/pages`

These are React Components that represents "pages", i.e. they are used directly in [routes](../client/routes.tsx).

Any component that calls `useParams()` should be in here

## Hooks `/client/hooks`

In the past we've called `useQuery` and similar directly in our React components.

Sometimes it makes sense to extract a [custom hook](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component) and in this case we have done so for all our hooks that call useQuery to make use of async data.

This can be good for [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) and keeps our React code focussed on presentation.

## Environment variables `client/env.ts`

This file keeps all our `import.meta.env` usage in one place, and just makes it easier for our usage of these values to be well typed and to avoid typos
