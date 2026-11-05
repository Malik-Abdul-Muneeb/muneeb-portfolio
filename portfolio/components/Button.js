const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition duration-200 active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-line text-ink hover:border-accent hover:text-accent",
};

// Renders a link. Pass external to open in a new tab.
export default function Button({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
  ...props
}) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
