import NavBar from "@/components/home/header/navbar";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const getLoggedInUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  let loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedInUser) {
    loggedInUser = await prisma.user.create({
      data: {
        name: `${user.fullName} ${user.lastName}`,
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });
  }
  return loggedInUser;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  getLoggedInUser(); 

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
