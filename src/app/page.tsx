import LoginPage from "./_components/admin/login-form";
import { ThemeToggle } from "./_components/theme/toggle-theme-button";

export default function Home() {
  return (
    <>
      <LoginPage />
      <ThemeToggle />
    </>
  );
}
