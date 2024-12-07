import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const userActivity = [
  {
    user: "Sarah Johnson",
    action: "Uploaded presentation",
    date: "2023-06-01",
    details: "Marketing Strategy 2024",
  },
  {
    user: "Michael Chen",
    action: "Commented",
    date: "2023-06-02",
    details: "Great insights on slide 15!",
  },
  {
    user: "Emily Davis",
    action: "Liked presentation",
    date: "2023-06-03",
    details: "Q4 Financial Report",
  },
  {
    user: "Alex Thompson",
    action: "Shared presentation",
    date: "2023-06-04",
    details: "Product Roadmap",
  },
  {
    user: "Olivia Martinez",
    action: "Downloaded presentation",
    date: "2023-06-05",
    details: "Team Building Activities",
  },
]

export function UserActivity() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userActivity.map((activity) => (
          <TableRow key={activity.date + activity.user}>
            <TableCell className="font-medium">{activity.user}</TableCell>
            <TableCell>{activity.action}</TableCell>
            <TableCell>{activity.date}</TableCell>
            <TableCell>{activity.details}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

