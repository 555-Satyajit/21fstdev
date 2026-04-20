"use client";

import React from 'react';
import { Grid2x2PlusIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetFooter } from '@/components/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Features',
			href: '#',
		},
		{
			label: 'Pricing',
			href: '#',
		},
		{
			label: 'About',
			href: '#',
		},
	];

	return (
		<header
			className={cn(
				'fixed top-5 left-1/2 -translate-x-1/2 z-50',
				'w-full max-w-3xl rounded-lg border shadow',
				'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5">
				<Link href="/" className="hover:bg-accent flex cursor-pointer items-center gap-3 rounded-md px-2 py-1 duration-100">
					<Grid2x2PlusIcon className="size-5 text-lime-400" />
					<p className="text-xl font-bold tracking-tighter uppercase italic">Aurora</p>
				</Link>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link, index) => (
						<a
							key={index}
							className={buttonVariants({ variant: 'ghost', size: 'sm' })}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<Link
						href="/login"
						className={buttonVariants({ size: "sm" })}
					>
						Login
					</Link>
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden"
						>
							<MenuIcon className="size-4" />
						</Button>
						<SheetContent
							className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
							showClose={false}
							side="left"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link, index) => (
									<a
										key={index}
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start',
										})}
										href={link.href}
									>
										{link.label}
									</a>
								))}
							</div>
							<SheetFooter className="flex flex-col gap-2 p-4">
								<Link 
									href="/login" 
									onClick={() => setOpen(false)}
									className={buttonVariants({ variant: "outline" })}
								>
									Sign In
								</Link>
								<Link 
									href="/login" 
									onClick={() => setOpen(false)}
									className={buttonVariants()}
								>
									Get Started
								</Link>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
