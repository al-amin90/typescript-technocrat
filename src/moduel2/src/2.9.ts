{
  // as Constraint

  const UserRoles = {
    Admin: "ADMIN",
    User: "USER",
    Editor: "EDITOR",
  } as const;

  const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    // role: "ADMIN" | "USER" | "EDITOR"
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
      return true;
    } else return false;
  };

  const isEditPermission = canEdit(UserRoles.Admin);

  // conditional type
  type a1 = boolean;
  type b1 = undefined;

  type x = a1 extends number ? true : false; // conditional type
  type y = b1 extends boolean ? boolean : a1 extends number ? number : any;

  type Sheikh = {
    car: string;
    bike: string;
    ship: string;
    plane: string;
  };

  type checkVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasCar = checkVehicle<"plane">;
}
