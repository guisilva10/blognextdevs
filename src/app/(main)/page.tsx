import Link from "next/link";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import {
  SearchCodeIcon,
  TrendingUpIcon,
  BookOpenIcon,
  RssIcon,
  MailIcon,
  ArrowRightIcon,
  CodeIcon,
  GlobeIcon,
  DatabaseIcon,
  CloudIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import { Badge } from "../_components/ui/badge";
import { Input } from "../_components/ui/input";
import GridLayout from "../_components/ui/grid-layout";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <GridLayout
        crosshairs={{
          topLeft: true,
          bottomRight: true,
        }}
        lineVariant="none"
        className="mt-10 min-h-[350px] p-8"
      >
        <section className="bg-background border-border z-10 flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center rounded-md border px-4 text-center">
          <div className="relative">
            <div className="bg-primary/20 absolute top-60 -left-50 h-60 w-60 rounded-full blur-3xl"></div>
            <div className="bg-primary/20 absolute -right-50 -bottom-40 h-60 w-60 rounded-full blur-3xl"></div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Bem-vindo a <span className="text-primary">LAB NDA</span>
            </h1>
          </div>
          <p className="text-muted-foreground mt-6 max-w-3xl text-xl">
            Explore a <span className="text-primary">LAB NDA</span>, sua nova
            fonte de conhecimento sobre desenvolvimento web, tecnologias
            modernas e melhores práticas. Junte-se a nós e fique por dentro das
            últimas novidades e tutoriais.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="from-primary/70 via-primary to-primary/70 hover:from-primary hover:to-primary flex animate-pulse items-center rounded-md bg-gradient-to-r px-4 py-3 font-bold text-white transition-all hover:bg-gradient-to-r hover:transition-all"
            >
              Navegar na Documentação
              <SearchCodeIcon className="ml-2 size-4" />
            </Link>

            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Ler Blog</Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center rounded-lg border p-4">
              <span className="text-primary text-3xl font-bold">500+</span>
              <span className="text-muted-foreground text-sm">Artigos</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-4">
              <span className="text-primary text-3xl font-bold">50k+</span>
              <span className="text-muted-foreground text-sm">
                Leitores Mensais
              </span>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-4">
              <span className="text-primary text-3xl font-bold">100+</span>
              <span className="text-muted-foreground text-sm">Tutoriais</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-4">
              <span className="text-primary text-3xl font-bold">30+</span>
              <span className="text-muted-foreground text-sm">Tecnologias</span>
            </div>
          </div>
        </section>
      </GridLayout>

      {/* Featured Articles Section */}
      <section className="w-full max-w-7xl px-4 py-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Artigos em Destaque</h2>
          <Button asChild variant="ghost">
            <Link href="/blog" className="flex items-center">
              Ver todos <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Artigo sobre React"
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2">Novo</Badge>
            </div>
            <CardHeader>
              <CardTitle>Dominando React Hooks em 2024</CardTitle>
              <CardDescription>
                Aprenda as melhores práticas e padrões avançados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">
                Descubra como utilizar os React Hooks de forma eficiente e como
                criar seus próprios hooks personalizados para reutilização de
                lógica.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Frontend</Badge>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/blog/react-hooks">Ler mais</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Artigo sobre Next.js"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Next.js 15: O que há de novo?</CardTitle>
              <CardDescription>
                Explorando as novidades da versão mais recente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">
                Uma análise completa das novas funcionalidades, melhorias de
                desempenho e mudanças na API do Next.js 15.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Fullstack</Badge>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/blog/nextjs-15">Ler mais</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Artigo sobre TypeScript"
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2" variant="secondary">
                Popular
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>TypeScript Avançado para Desenvolvedores</CardTitle>
              <CardDescription>
                Domine tipos genéricos e padrões avançados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">
                Aprenda a utilizar recursos avançados do TypeScript para criar
                código mais seguro, manutenível e escalável.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Avançado</Badge>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/blog/typescript-avancado">Ler mais</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Explore por Categorias
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Link
              href="/blog/category/frontend"
              className="bg-card hover:border-primary flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:shadow-md"
            >
              <CodeIcon className="text-primary mb-2 h-8 w-8" />
              <span className="font-medium">Frontend</span>
            </Link>

            <Link
              href="/blog/category/backend"
              className="bg-card hover:border-primary flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:shadow-md"
            >
              <DatabaseIcon className="text-primary mb-2 h-8 w-8" />
              <span className="font-medium">Backend</span>
            </Link>

            <Link
              href="/blog/category/devops"
              className="bg-card hover:border-primary flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:shadow-md"
            >
              <CloudIcon className="text-primary mb-2 h-8 w-8" />
              <span className="font-medium">DevOps</span>
            </Link>

            <Link
              href="/blog/category/mobile"
              className="bg-card hover:border-primary flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:shadow-md"
            >
              <GlobeIcon className="text-primary mb-2 h-8 w-8" />
              <span className="font-medium">Mobile</span>
            </Link>

            <Link
              href="/blog/category/ai"
              className="bg-card hover:border-primary flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:shadow-md"
            >
              <TrendingUpIcon className="text-primary mb-2 h-8 w-8" />
              <span className="font-medium">IA & ML</span>
            </Link>

            <Link
              href="/blog/category/tutorials"
              className="bg-card hover:border-primary flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:shadow-md"
            >
              <BookOpenIcon className="text-primary mb-2 h-8 w-8" />
              <span className="font-medium">Tutoriais</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="w-full max-w-7xl px-4 py-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Notícias de Tecnologia</h2>
          <Button asChild variant="ghost">
            <Link href="/news" className="flex items-center">
              Ver todas <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col md:flex-row">
            <div className="relative h-48 w-full md:h-auto md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Notícia sobre IA"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  OpenAI lança novo modelo de linguagem
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  A empresa anunciou seu mais recente modelo com capacidades
                  avançadas de raciocínio e compreensão contextual.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Há 2 dias</span>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/news/openai-new-model">Ler mais</Link>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col md:flex-row">
            <div className="relative h-48 w-full md:h-auto md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Notícia sobre Web"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  W3C finaliza especificação do WebGPU
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Nova API promete revolucionar gráficos e computação na web com
                  acesso direto ao hardware gráfico.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Há 5 dias</span>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/news/webgpu-spec">Ler mais</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <GridLayout
        crosshairs={{
          topRight: true,
          bottomLeft: true,
        }}
        lineVariant="none"
        className="mt-10 min-h-[350px] p-8"
      >
        <section className="w-full py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-10 text-center text-3xl font-bold">
              O que dizem nossos leitores
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <p className="italic">
                    &quot;O Blog NextDevs tem sido minha principal fonte de
                    conhecimento para me manter atualizado com as tecnologias
                    web. Os tutoriais são claros e práticos!&quot;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="bg-primary/20 h-10 w-10 rounded-full"></div>
                    <div>
                      <p className="font-medium">Ana Silva</p>
                      <p className="text-muted-foreground text-sm">
                        Desenvolvedora Frontend
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <p className="italic">
                    &quot;A documentação e os artigos sobre Next.js me ajudaram
                    a migrar nosso projeto para o App Router. Conteúdo de
                    altíssima qualidade!&quot;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="bg-primary/20 h-10 w-10 rounded-full"></div>
                    <div>
                      <p className="font-medium">Carlos Mendes</p>
                      <p className="text-muted-foreground text-sm">Tech Lead</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <p className="italic">
                    &quot;Como iniciante, os tutoriais passo a passo me ajudaram
                    a entender conceitos complexos de forma simples. Recomendo
                    para todos os níveis!&quot;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="bg-primary/20 h-10 w-10 rounded-full"></div>
                    <div>
                      <p className="font-medium">Juliana Costa</p>
                      <p className="text-muted-foreground text-sm">
                        Estudante de Computação
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </GridLayout>
      {/* Newsletter Section */}
      <section className="w-full max-w-7xl px-4 py-16">
        <div className="rounded-xl border p-8 text-center shadow-sm">
          <RssIcon className="text-primary mx-auto mb-4 h-12 w-12" />
          <h2 className="mb-2 text-2xl font-bold">
            Fique por dentro das novidades
          </h2>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            Assine nossa newsletter e receba semanalmente os melhores artigos,
            tutoriais e notícias sobre desenvolvimento web e tecnologia.
          </p>

          <form className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1"
              required
            />
            <Button type="submit" className="whitespace-nowrap">
              <MailIcon className="mr-2 h-4 w-4" />
              Inscrever-se
            </Button>
          </form>
          <p className="text-muted-foreground mt-4 text-xs">
            Prometemos não enviar spam. Você pode cancelar a inscrição a
            qualquer momento.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 text-white">
        <div className="bg-primary/20 absolute -top-10 -left-10 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="bg-primary/20 absolute -right-10 -bottom-10 h-60 w-60 rounded-full blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Pronto para mergulhar no conhecimento?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Explore nossa documentação completa, artigos detalhados e tutoriais
            passo a passo para elevar suas habilidades de desenvolvimento.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              <Link href="/docs">Explorar Documentação</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hover:text-primary border-white text-white hover:bg-white"
            >
              <Link href="/blog">Ver Artigos Recentes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
