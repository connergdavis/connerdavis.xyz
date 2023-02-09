export default function classNames(
  ...classNames: Array<string[] | string | false | undefined | 0>
): string {
  return classNames
    .filter((item) => item)
    .join(" ")
    .replace(/(,|\s\s)/g, " ");
}
