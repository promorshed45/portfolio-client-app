"use client";


import { usePathname, useRouter } from "next/navigation";


import { useUser } from "@/src/providers/user.provider";
import { logout } from "@/src/services/AuthService";
import { protectedRoutes } from "@/src/constant";
import { BookOpenText, LayoutDashboard, LogIn, LogOut, User2 } from "lucide-react";
import { NavbarContent } from "@nextui-org/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { User } from "@nextui-org/user";

const NavDropdownMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setIsLoading: userLoading }: any = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };


  return (
    <div className="flex items-center gap-4">
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name={user?.name || "Guest"} // Default to "Guest" if user name is not available
            size="sm"
            src={user?.profilePhoto || "https://nextui.org/avatars/avatar-1.png"} // Fallback avatar image
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: user?.profilePhoto || "https://nextui.org/avatars/avatar-1.png", // Default avatar
              }}
              className="transition-transform"
              description={user?.email}
              name={user?.name || "Guest"} // Default to "Guest" if user name is not available
            />
          </DropdownItem>
  
          {/* Role-Based Dropdown Items */}
          {user ? (
            <>
              {/* For ADMIN Role */}
              {user.role === "ADMIN" && (
                <DropdownItem
                  key="dashboard"
                  startContent={<LayoutDashboard className="size-4" />}
                  href="/admin"
                >
                  Dashboard
                </DropdownItem>
              )}
  
              {/* For INSTRUCTOR Role */}
              {user.role === "INSTRUCTOR" && (
                <DropdownItem
                  key="my-class"
                  startContent={<LayoutDashboard className="size-4" />}
                  href="/instructor"
                >
                  Dashboard
                </DropdownItem>
              )}

              {/* For User Role (Fallback, for standard users) */}
              {user.role === "USER" && (
                  <>
                    <DropdownItem
                      key="my-class"
                      startContent={<BookOpenText className="size-4" />}
                      href="/dashboard"
                    >
                      My Class
                    </DropdownItem>

                    <DropdownItem
                      key="edit"
                      startContent={<User2 className="size-4" />}
                      href="/profile/my-profile"
                    >
                      My Profile
                    </DropdownItem>
                  </>
              )}
  
              
            </>
          ) : (
            <DropdownItem
              key="login"
              startContent={<LogIn className="size-4" />}
              href="/login"
            >
              Login
            </DropdownItem>
          )}
  
          {/* Logout */}
          {user && (
            <DropdownItem
              key="logout"
              className="text-danger font-medium"
              color="danger"
              startContent={<LogOut className="size-4" />}
              onClick={handleLogout}
            >
              LogOut
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  </div>
     
  );
};

export default NavDropdownMenu;
