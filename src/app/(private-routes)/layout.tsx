import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import nextAuthOptions from "@/libs/nextAuthOptions";
import { redirect } from "next/navigation";

interface PrivateLayoutProps {
	children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps){
	const session = await getServerSession(nextAuthOptions)

	if (!session) {
		redirect('/login')
	}

	return <>{children}</>
}