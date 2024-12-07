import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CategoryHeader() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Business Presentations & Documents</h1>
      <div className="flex items-center gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="File type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="presentation">Presentations</SelectItem>
            <SelectItem value="document">Documents</SelectItem>
            <SelectItem value="infographic">Infographics</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="en">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="link" className="text-blue-600">
          Clear all
        </Button>
      </div>
    </div>
  )
}

