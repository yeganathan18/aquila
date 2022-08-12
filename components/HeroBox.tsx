import Link from 'next/link'
import { Button } from './Button'
import { HeroOneButton } from './HeroOneButton'
import { Section } from './Section'

const HeroBox = () => {
  return (
    <>
    <div className="bg-blue-50">
        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title='National Higher Secondary School'
            description={JSON.stringify(
              'The ink of the scholar is more holy than the blood of the martyr'
            )}
            button={
              <Link href="#">
                <a className="text-blue">
                  <Button>Know More ↓</Button>
                </a>
              </Link>
            }
          />
        </Section>
      </div>
    </>
  )
}

export default HeroBox
