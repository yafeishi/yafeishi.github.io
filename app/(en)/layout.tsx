import type { Metadata, Viewport } from "next";
import { RootDocument, rootMetadata, viewport as rootViewport } from "../components/RootDocument";

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = rootViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
