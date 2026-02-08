import { TagList } from "@/components/shared/tag-list";

interface PostHeaderProps {
  title: string;
  date: string;
  tags: string[];
}

function PostHeader({ title, date, tags }: PostHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
      <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <div className="mt-3">
        <TagList tags={tags} />
      </div>
    </header>
  );
}
export { PostHeader };
