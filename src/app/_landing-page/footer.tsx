export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} QuizCraft. All rights reserved.
        </p>
        <nav className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
