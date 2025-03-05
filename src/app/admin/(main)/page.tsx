import { auth } from "@/services/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { FileText, BarChart2, Users, BookOpen, Plus } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await auth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-foreground text-sm">
            Bem-vindo, {session?.user.name}
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Artigos
            </CardTitle>
            <FileText className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-muted-foreground text-xs">
              +2 nos últimos 30 dias
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documentação</CardTitle>
            <BookOpen className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-muted-foreground text-xs">
              +3 nos últimos 30 dias
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
            <BarChart2 className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,203</div>
            <p className="text-muted-foreground text-xs">
              +19% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários</CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-muted-foreground text-xs">
              +201 nos últimos 30 dias
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Artigos Recentes</CardTitle>
              <Button asChild size="sm">
                <Link href="/admin/blog/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Artigo
                </Link>
              </Button>
            </div>
            <CardDescription>
              Gerencie os artigos do blog da LAB NDA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{article.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {article.date}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/blog/edit/${article.id}`}>Editar</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Documentação Recente</CardTitle>
              <Button asChild size="sm">
                <Link href="/admin/docs/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Nova Documentação
                </Link>
              </Button>
            </div>
            <CardDescription>
              Gerencie a documentação da LAB NDA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{doc.title}</p>
                    <p className="text-muted-foreground text-sm">{doc.date}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/docs/edit/${doc.id}`}>Editar</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Sample data
const recentArticles = [
  { id: "1", title: "Introdução à LAB NDA", date: "12 de Março, 2025" },
  {
    id: "2",
    title: "Melhores práticas para desenvolvimento",
    date: "8 de Março, 2025",
  },
  { id: "3", title: "Como utilizar nossa API", date: "1 de Março, 2025" },
  { id: "4", title: "Novidades da plataforma", date: "25 de Fevereiro, 2025" },
];

const recentDocs = [
  { id: "1", title: "Guia de Instalação", date: "10 de Março, 2025" },
  { id: "2", title: "Documentação da API", date: "5 de Março, 2025" },
  {
    id: "3",
    title: "Tutoriais para Iniciantes",
    date: "28 de Fevereiro, 2025",
  },
  { id: "4", title: "FAQ", date: "20 de Fevereiro, 2025" },
];
