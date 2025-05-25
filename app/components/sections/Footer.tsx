export default function Footer() {
  return (
    <footer className="mt-16 pb-8">
      <div className="container mx-auto px-4 py-2">
        <hr className="border-gray-400/40 border-t-1 w-full mb-4 " />
        <div className="text-sm text-links text-right px-1 md:px-0 hover:text-links-hover transition-colors duration-200 ease-in-out">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://lekanger.no">Kurt Lekanger</a>
        </div>
      </div>
    </footer>
  );
}
