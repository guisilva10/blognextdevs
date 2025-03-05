import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Textarea } from "@/app/_components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

export default async function NewBlogPost() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Novo Artigo</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Artigo</CardTitle>
          <CardDescription>
            Crie um novo artigo para o blog da LAB NDA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input id="title" placeholder="Digite o título do artigo" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" placeholder="titulo-do-artigo" />
              <p className="text-muted-foreground text-sm">
                O slug é usado na URL do artigo. Ex:
                labnda.com/blog/titulo-do-artigo
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tutorials">Tutoriais</SelectItem>
                  <SelectItem value="news">Notícias</SelectItem>
                  <SelectItem value="case-studies">Estudos de Caso</SelectItem>
                  <SelectItem value="research">Pesquisa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Resumo</Label>
              <Textarea
                id="excerpt"
                placeholder="Um breve resumo do artigo"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                placeholder="Conteúdo do artigo em Markdown"
                rows={12}
              />
              <p className="text-muted-foreground text-sm">
                Suporta formatação em Markdown
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Salvar como Rascunho</Button>
              <Button>Publicar Artigo</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
