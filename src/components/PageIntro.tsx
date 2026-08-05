type PageIntroProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export default function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children ? <div className="page-deck">{children}</div> : null}
    </header>
  );
}
