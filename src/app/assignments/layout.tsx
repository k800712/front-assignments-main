export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full w-full flex flex-col relative overflow-hidden">
            {/* 공통 Header */}
            <header className="w-full bg-gradient-to-r from-pink-200 via-pink-300 to-pink-100 text-gray-800 p-6 shadow-md flex justify-center items-center">
                <h1 className="text-xl font-bold">My Application</h1>
            </header>

            {/* 메인 컨텐츠 */}
            <main className="flex-1 overflow-y-auto">{children}</main>

            {/* 공통 Footer */}
            <footer className="w-full bg-gray-800 text-white p-4 text-center">
                <p className="text-sm">© {new Date().getFullYear()} MS & I Ltd. All rights reserved.</p>
            </footer>
        </div>
    );
}