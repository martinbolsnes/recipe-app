import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <section className={cn('w-full py-12 md:py-24 lg:py-32')}>
        <div className={cn('container px-4 md:px-6')}>
          <div
            className={cn(
              'grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'
            )}
          >
            <div className={cn('flex flex-col justify-center space-y-4')}>
              <div className={cn('space-y-2')}>
                <h1
                  className={cn(
                    'text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
                  )}
                >
                  Delicious Recipes at Your Fingertips
                </h1>
                <p className={cn('max-w-[600px] text-neutral-500 md:text-xl')}>
                  Discover a world of culinary delights with our recipe app.
                  Explore a vast collection of mouthwatering dishes, from
                  classic favorites to innovative creations.
                </p>
              </div>
              <div className={cn('flex flex-col gap-2 min-[400px]:flex-row')}>
                <Link href='/login'>
                  <Button variant='default' size='lg'>
                    Get Started
                  </Button>
                </Link>

                <Link href='/recipes'>
                  <Button variant='outline' size='lg'>
                    Explore Recipes
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              alt='Hero'
              className={cn(
                'mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last'
              )}
              height='550'
              src='/placeholder.svg'
              width='550'
            />
          </div>
        </div>
      </section>
      <section className={cn('w-full py-12 md:py-24 lg:py-32 bg-neutral-100 ')}>
        <div className={cn('container px-4 md:px-6')}>
          <div
            className={cn(
              'flex flex-col items-center justify-center space-y-4 text-center'
            )}
          >
            <div className={cn('space-y-2')}>
              <h2
                className={cn(
                  'text-3xl font-bold tracking-tighter sm:text-5xl'
                )}
              >
                Featured Recipes
              </h2>
              <p
                className={cn(
                  'max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed '
                )}
              >
                Explore our collection of delicious and easy-to-follow recipes.
              </p>
            </div>
          </div>
          <div
            className={cn(
              'mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12'
            )}
          >
            <div
              className={cn(
                'flex flex-col justify-between rounded-md bg-white shadow-sm transition-all hover:shadow-md overflow-hidden'
              )}
            >
              <Image
                alt='Recipe'
                className={cn('w-full h-42 aspect-video object-cover')}
                height='200'
                src='/placeholder.svg'
                width='300'
              />
              <div className={cn('space-y-2 p-4')}>
                <h3 className={cn('text-xl font-bold')}>
                  Creamy Mushroom Risotto
                </h3>
                <p className={cn('text-neutral-500 ')}>
                  A rich and creamy risotto made with fresh mushrooms and
                  parmesan.
                </p>
              </div>
            </div>
            <div
              className={cn(
                'flex flex-col justify-between rounded-md bg-white shadow-sm transition-all hover:shadow-md overflow-hidden'
              )}
            >
              <Image
                alt='Recipe'
                className={cn('w-full h-42 aspect-video object-cover')}
                height='200'
                src='/placeholder.svg'
                width='300'
              />
              <div className={cn('space-y-2 p-4')}>
                <h3 className={cn('text-xl font-bold')}>
                  Grilled Salmon with Lemon Dill
                </h3>
                <p className={cn('text-neutral-500 ')}>
                  Tender salmon fillets grilled to perfection and topped with a
                  bright lemon-dill sauce.
                </p>
              </div>
            </div>
            <div
              className={cn(
                'flex flex-col justify-between rounded-md bg-white shadow-sm transition-all hover:shadow-md overflow-hidden'
              )}
            >
              <Image
                alt='Recipe'
                className={cn('w-full h-42 aspect-video object-cover')}
                height='200'
                src='/placeholder.svg'
                width='300'
              />
              <div className={cn('space-y-2 p-4')}>
                <h3 className={cn('text-xl font-bold')}>Vegetable Stir-Fry</h3>
                <p className={cn('text-neutral-500 ')}>
                  A colorful and flavorful stir-fry packed with fresh vegetables
                  and a savory sauce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cn('w-full py-12 md:py-24 lg:py-32')}>
        <div className={cn('container px-4 md:px-6')}>
          <div
            className={cn(
              'flex flex-col items-center justify-center space-y-4 text-center'
            )}
          >
            <div className={cn('space-y-2')}>
              <h2
                className={cn(
                  'text-3xl font-bold tracking-tighter sm:text-5xl'
                )}
              >
                What Our Users Say
              </h2>
              <p
                className={cn(
                  'max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed '
                )}
              >
                Hear from our satisfied customers about their experience with
                our recipe app.
              </p>
            </div>
            <div
              className={cn(
                'mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12'
              )}
            >
              <div
                className={cn(
                  'flex flex-col justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md '
                )}
              >
                <blockquote
                  className={cn(
                    'text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl'
                  )}
                >
                  “This recipe app has completely transformed the way I cook.
                  The recipes are easy to follow and the results are always
                  delicious.”
                </blockquote>
                <div className={cn('pt-4')}>
                  <div className={cn('font-semibold')}>Emily Johnson</div>
                  <div className={cn('text-sm text-neutral-500 ')}>
                    Home Cook
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  'flex flex-col justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md '
                )}
              >
                <blockquote
                  className={cn(
                    'text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl'
                  )}
                >
                  “I never thought I could cook such amazing meals, but this app
                  has made it so easy. Im constantly impressed by the quality of
                  the recipes.”
                </blockquote>
                <div className={cn('pt-4')}>
                  <div className={cn('font-semibold')}>Michael Chen</div>
                  <div
                    className={cn('text-sm text-gray-500 dark:text-gray-400')}
                  >
                    Busy Professional
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  'flex flex-col justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md '
                )}
              >
                <blockquote
                  className={cn(
                    'text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl'
                  )}
                >
                  “This app has completely changed the way I think about
                  cooking. The recipes are so creative and the instructions are
                  super easy to follow.”
                </blockquote>
                <div className={cn('pt-4')}>
                  <div className={cn('font-semibold')}>Sarah Lee</div>
                  <div className={cn('text-sm text-neutral-500 ')}>
                    Aspiring Chef
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
