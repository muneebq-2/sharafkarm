import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface RouterContextValue {
  pathname: string;
  hash: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

const readLocation = () => ({
  pathname: window.location.pathname,
  hash: window.location.hash,
});

export function Router({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const onPopState = () => setLocation(readLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    window.history.pushState({}, '', to);
    const next = readLocation();
    setLocation(next);
    if (!next.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <RouterContext.Provider
      value={{ pathname: location.pathname, hash: location.hash, navigate }}
    >
      {children}
    </RouterContext.Provider>
  );
}

function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('Router hooks must be used within <Router>');
  }
  return ctx;
}

export function useLocation() {
  const { pathname, hash } = useRouter();
  return { pathname, hash };
}

export function useNavigate() {
  return useRouter().navigate;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, children, onClick, ...props }: LinkProps) {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
