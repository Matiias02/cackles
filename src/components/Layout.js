import Navbar from "./Navbar";

export const Layout = ({ children }) => {
    return (
        <main className="main">
            <Navbar />
            {children}
        </main>
    );
};