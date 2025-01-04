type ClassValue = string | string[] | undefined;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function clsx(inputs: ClassValue[]): any {
    throw new Error("Function not implemented.");
}
function twMerge(arg0: any) {
    throw new Error("Function not implemented.");
}

