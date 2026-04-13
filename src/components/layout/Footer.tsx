// Footer.tsx — Simple copyright footer

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8 px-6">
      <div className="mx-auto max-w-site text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mukul Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
