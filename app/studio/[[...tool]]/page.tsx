"use client";

import { NextStudio } from "next-sanity/studio/client-component";
import { StyleSheetManager } from 'styled-components'

import config from "../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) => prop !== "flexGrow" && prop !== "flexBasis"}
    >
      <NextStudio config={config} />
    </StyleSheetManager>
  );
}
